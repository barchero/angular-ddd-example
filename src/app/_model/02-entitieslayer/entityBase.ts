import {AppUtilities} from "../04-utilitieslayer/appUtilities";

export abstract class EntityBase {
    id: string;
    dbInsertedDate: Date;
    deletedDate: Date;

    constructor(){
        this.id = AppUtilities.newGuid();
        this.dbInsertedDate = null;
        this.deletedDate = null;
    }
}