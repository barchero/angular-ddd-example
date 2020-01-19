import {IPersistenceManager} from "@app/_model/03-persistencelayer/manager/iPersistenceManager";
import {PersistenceTecnologies} from "@app/_model/04-utilitieslayer/appUtilities";
import {WebStoragePersistanceManager} from "@app/_model/03-persistencelayer/impl/webStorage/manager/webStoragePersistenceManager";
import {RestPersistenceManager} from "@app/_model/03-persistencelayer/impl/rest/manager/restPersistenceManager";

export abstract class ServiceBase {
    constructor(private persistenceManagers: IPersistenceManager[]){

    }

    getPersistenceManager(persistenceTecnology: PersistenceTecnologies): IPersistenceManager{
        let persistenceManager: IPersistenceManager = null;
        switch(persistenceTecnology){
            case PersistenceTecnologies.WEB_STORAGE:
                persistenceManager = this.persistenceManagers.find(pm => pm instanceof WebStoragePersistanceManager);
            break;

            case PersistenceTecnologies.REST:
                persistenceManager = this.persistenceManagers.find(pm => pm instanceof RestPersistenceManager);
            break;
        }

        return persistenceManager;
    }
}