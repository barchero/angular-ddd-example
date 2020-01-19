import {ICommercesService} from "../api/commerces/iCommercesService";

export interface IServiceManager{
    getCommercesService(): ICommercesService;
}