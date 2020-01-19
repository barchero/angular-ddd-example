import {ICommercesDAO} from "../api/commerces/iCommercesDAO";

export interface IPersistenceManager {
    getCommercesDAO(): ICommercesDAO
}