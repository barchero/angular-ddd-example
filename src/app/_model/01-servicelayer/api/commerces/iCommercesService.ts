import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {PersistenceTecnologies} from "@app/_model/04-utilitieslayer/appUtilities";
import {Observable} from "rxjs";

export interface ICommercesService {
    saveCommerce(commerce:Commerce,
        persistenceTecnology: PersistenceTecnologies,
        persistenceDependency: any
        ): Observable<Commerce>;

    saveCommerces(commerces: Commerce[],
        persistenceTecnology: PersistenceTecnologies,
        persistenceDependency: any
        ): Observable<Commerce[]>;
        
    getCommerceById(id: String,
        persistenceTecnology: PersistenceTecnologies,
        persistenceDependency: any): Observable<Commerce>;
        
    getCommerces(persistenceTecnology: PersistenceTecnologies,
        persistenceDependency: any): Observable<Commerce[]>;
}