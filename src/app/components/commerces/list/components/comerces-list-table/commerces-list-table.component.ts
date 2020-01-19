import {Component, Input} from "@angular/core";
import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";

@Component({
    selector: 'app-commerces-list-table-component',
    templateUrl: './commerces-list-table.component.html'
})
export class CommercesListTableComponent{

    sortAsc:Boolean=true;
    currentSortProperty: String = 'id'
    @Input() commerces:Commerce[];

    sortingClass(id){
        return {
            'sorting': this.currentSortProperty !== id,
            'sorting_asc': this.currentSortProperty == id && this.sortAsc,
            'sorting_desc': this.currentSortProperty == id && !this.sortAsc
        }
    }

    deepValue(obj, path){
        for (var i = 0, path=path.split('.'), len=path.length; i<len; i++){
            obj = obj[path[i]];
        }
        return obj;
    }

    sort(sortProperty: string){
        if(this.currentSortProperty == sortProperty){
            this.sortAsc=!this.sortAsc
        }else{
            this.sortAsc=true
        }
        this.commerces.sort(
            (a: Commerce, b:Commerce) => {
                let prop1 = this.deepValue(a, sortProperty);
                let prop2 = this.deepValue(b, sortProperty);

                let orden = (prop1 > prop2)? 1 : (prop1 < prop2) ? -1 : 0
                if(!this.sortAsc) orden*=-1
                return orden
            }
        )
        this.currentSortProperty=sortProperty;
    }
    
}