import {ICommercesService} from "../../api/commerces/iCommercesService";
import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {ServiceBase} from "../base/serviceBase";
import {PersistenceTecnologies} from "@app/_model/04-utilitieslayer/appUtilities";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export class CommercesService extends ServiceBase implements ICommercesService{

    saveCommerce(commerce: Commerce, persistenceTecnology: PersistenceTecnologies, persistenceDependency: any): Observable<Commerce> {
        return this.getPersistenceManager(persistenceTecnology)
        .getCommercesDAO()
        .saveCommerce(commerce, persistenceDependency)
        .pipe(
            tap(commerce => {
                
            })
        );
    } 

    saveCommerces(commerces: Commerce[], persistenceTecnology: PersistenceTecnologies, persistenceDependency: any): Observable<Commerce[]> {
        return this.getPersistenceManager(persistenceTecnology)
        .getCommercesDAO()
        .saveCommerces(commerces, persistenceDependency);
    }
    
    getCommerceById(id: String, persistenceTecnology: PersistenceTecnologies,  persistenceDependency: any): Observable<Commerce> {
        return this.getPersistenceManager(persistenceTecnology).getCommercesDAO().getCommerceById(id, persistenceDependency);
    }

    getCommerces(persistenceTecnology: PersistenceTecnologies,  persistenceDependency: any): Observable<Commerce[]> {
        return this.getPersistenceManager(persistenceTecnology).getCommercesDAO().getCommerces(persistenceDependency);
    }



}