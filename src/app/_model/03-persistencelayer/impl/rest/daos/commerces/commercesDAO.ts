import {ICommercesDAO} from "@app/_model/03-persistencelayer/api/commerces/iCommercesDAO";
import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, mergeMap} from "rxjs/operators";

export class CommercesDAO implements ICommercesDAO{
    private path: string="https://cabsa.azurewebsites.net/api/"

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    saveCommerce(commerce: Commerce, persistencyDependency: any): Observable<Commerce> {
        return this.getCommerces(persistencyDependency).pipe(
            mergeMap((data: Commerce[]) => {
                data = data || [];
                let index = data.findIndex(c => c.id == commerce.id);
                if (index == -1) {
                    data.push(commerce);
                } else {
                    data[index] = commerce;
                }
                return this.saveCommerces(data, persistencyDependency).pipe(
                    map((data: Commerce[]) => {
                        return data.find(c => c.id == commerce.id);
                    }));
            }))
    }

    saveCommerces(commerces: Commerce[], persistencyDependency: any): Observable<Commerce[]> {
        return (persistencyDependency as HttpClient)
        .post<any>(this.path + 'login/filejson/77cf6231-9b27-4a0a-87dd-95c169826eca', {value: JSON.stringify(commerces)}, this.httpOptions)
        .pipe(
            map((data) => JSON.parse(data.json))
        )
    }
    
    getCommerceById(id: String, persistencyDependency: any): Observable<Commerce> {
        return this.getCommerces(persistencyDependency).pipe(
            map((commerces: Commerce[]) => commerces.find((c) => c.id == id))
        )
    }
    
    getCommerces(persistencyDependency: any): Observable<Commerce[]> {
        return (persistencyDependency as HttpClient)
        .get(this.path+'login/filejson/77cf6231-9b27-4a0a-87dd-95c169826eca')
        .pipe(
            map(
                (data:any) => {
                    if(data!== null) {
                        return JSON.parse(data.json)
                    }
                }
            )
        )

    }


}