import {Component, OnInit} from "@angular/core";
import {IServiceManager} from "@app/_model/01-servicelayer/manager/iServiceManager";
import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {PersistenceTecnologies} from "@app/_model/04-utilitieslayer/appUtilities";
import {HttpClient} from "@angular/common/http";
import {AppCacheService} from "@app/services/shared/appCacheService";
import {AppService} from "@app/services/shared/appService";
import {Router} from "@angular/router";

@Component({
    selector: 'commerces-list-component',
    templateUrl: './commerces-list.component.html'
})
export class CommercesListComponent implements OnInit{


    constructor(private http: HttpClient, private appCache: AppCacheService, private appService: AppService, private router: Router){

    }
    private serviceManager: IServiceManager = null;
    commerces: Commerce[];
    options: any;

    ngOnInit(): void {
        this.commerces = this.appCache.getCommerceCache().getCommerces();

        if(this.commerces == null){
            this.initComponent();
        }else{
            this.renderGrid();
        }
    }
    
    updateCommerces(){
        this.commerces.forEach(c=>c.regNumber='0')
    }

    initComponent(){

        this.serviceManager = this.appService.getServiceManager();


        this.serviceManager
        .getCommercesService()
        .getCommerces(PersistenceTecnologies.WEB_STORAGE, localStorage)
        .subscribe((data: Commerce[]) => {
            this.commerces = data;
            this.appCache.getCommerceCache().setCommerces(this.commerces);
            this.renderGrid();
        });


        // let c1:Commerce = new Commerce();
        // c1.name = "Comercio 1";
        // c1.regNumber = "00001";

        // let c2:Commerce = new Commerce();
        // c2.name = "Comercio 2";
        // c2.regNumber = "00002";

        // let commerces = new Array<Commerce>();
        // commerces.push(c1);
        // commerces.push(c2);
        
        // this.appCache.getCommerceCache().setCommerces(commerces)

        // this.serviceManager = this.appService.getServiceManager();
        // this.serviceManager
        // .getCommercesService()
        // .saveCommerces(commerces, PersistenceTecnologies.REST, this.http).subscribe(
        //     (data:Commerce[]) => {

        //         this.serviceManager
        //             .getCommercesService()
        //             .saveCommerces(commerces, PersistenceTecnologies.WEB_STORAGE, sessionStorage)
        //             .subscribe();

        //         this.serviceManager
        //             .getCommercesService()
        //             .getCommerces(PersistenceTecnologies.REST, this.http)
        //             .subscribe((data: Commerce[]) => {
        //                 this.commerces = data;
        //                 this.renderGrid();
        //             });
        //     }
        // ) 
    }

    renderGrid(){
        this.options = {
            data: this.commerces,            
            columns: [{data: 'id'}, {data: 'name'}, {data: 'regNumber'},
                {
                    data: null, render: function(data, type, row){
                        return `
                        <a class="btn btn-primary" name="btnSelectCommerce" data-element-id="${data.id}">edit</a>
                        `
                    }
                }] 
        }
        $(document).off('click', 'a[name=btnSelectCommerce]')
        $(document).on('click', 'a[name=btnSelectCommerce]', ($event) => {
            this.selectCommerce($($event.target).data("element-id"));
        })
    }

    selectCommerce(id){
        this.router.navigate(['commerces/detail/'+id]);
    }
    edit(id){
        console.log(id);
    }

    createCommerce(){
        this.router.navigate(['commerces/detail'])
    }
}