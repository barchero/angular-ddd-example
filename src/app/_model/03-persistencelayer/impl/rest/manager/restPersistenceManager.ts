import {IPersistenceManager} from "@app/_model/03-persistencelayer/manager/iPersistenceManager";
import {ICommercesDAO} from "@app/_model/03-persistencelayer/api/commerces/iCommercesDAO";
import {CommercesDAO} from "../daos/commerces/commercesDAO";

export class RestPersistenceManager implements IPersistenceManager{

    private commercesDAO: ICommercesDAO = null;
    
    getCommercesDAO(): ICommercesDAO {
        if(this.commercesDAO == null){
            this.commercesDAO = new CommercesDAO();
        }

        return this.commercesDAO;
    }

}