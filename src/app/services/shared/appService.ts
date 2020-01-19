import {Injectable} from "@angular/core";
import {IServiceManager} from "@app/_model/01-servicelayer/manager/iServiceManager";
import {ServiceManager} from "@app/_model/01-servicelayer/manager/serviceManager";

@Injectable({
    providedIn: 'root'
})
export class AppService{
    private serviceManager: IServiceManager = null;

    getServiceManager(): IServiceManager{
        if(this.serviceManager==null){
            this.serviceManager= new ServiceManager();
        }
        return this.serviceManager;
    }
}