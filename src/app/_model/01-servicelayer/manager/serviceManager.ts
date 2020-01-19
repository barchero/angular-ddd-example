import {IServiceManager} from "./iServiceManager";
import {ICommercesService} from "../api/commerces/iCommercesService";
import {CommercesService} from "../impl/commerces/commercesService";
import {IPersistenceManager} from "@app/_model/03-persistencelayer/manager/iPersistenceManager";
import {WebStoragePersistanceManager} from "@app/_model/03-persistencelayer/impl/webStorage/manager/webStoragePersistenceManager";
import {RestPersistenceManager} from "@app/_model/03-persistencelayer/impl/rest/manager/restPersistenceManager";

export class ServiceManager implements IServiceManager{

    private persistencesManagers: IPersistenceManager[] = null;
    private commercesService: ICommercesService = null;

    constructor(){
        this.persistencesManagers = new Array<IPersistenceManager>();
        this.persistencesManagers.push(new WebStoragePersistanceManager());
        this.persistencesManagers.push(new RestPersistenceManager());
    }

    getCommercesService(): ICommercesService {
        if(this.commercesService === null){
            this.commercesService = new CommercesService(this.persistencesManagers);
        }

        return this.commercesService;
    }


}