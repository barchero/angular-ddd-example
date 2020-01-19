import {ICommercesDAO} from "@app/_model/03-persistencelayer/api/commerces/iCommercesDAO";
import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {Observable, of} from "rxjs";

export class CommercesDAO implements ICommercesDAO{

    saveCommerces(commerces: Commerce[], persistencyDependency: any): Observable<Commerce[]> {
        commerces.forEach(element => {
            this.saveCommerce(element, persistencyDependency).subscribe();
        });

        return of(commerces);
    }
    
    saveCommerce(commerce: Commerce, persistencyDependency: any): Observable<Commerce> {
        (persistencyDependency as Storage).setItem('commerce_' + commerce.id.toString(), JSON.stringify(commerce));
        
        return of(commerce);
    }
    
    getCommerceById(id: string, persistencyDependency: any): Observable<Commerce> {
        return of(JSON.parse((persistencyDependency as Storage).getItem('commerce_'+id)));
    }
    
    getCommerces(persistencyDependency: any): Observable<Commerce[]> {
        return of(Object.keys((persistencyDependency as Storage))
        .filter(i => i.startsWith('commerce_'))
        .map((key)=> JSON.parse((persistencyDependency as Storage)[key])));
    }

}