import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {Observable} from "rxjs";

export interface ICommercesDAO {
    saveCommerce(commerce: Commerce, persistencyDependency: any): Observable<Commerce>;

    saveCommerces(commerces: Commerce[], persistencyDependency: any): Observable<Commerce[]>;

    getCommerceById(id: String, persistencyDependency: any): Observable<Commerce>;

    getCommerces(persistencyDependency: any): Observable<Commerce[]>;
}