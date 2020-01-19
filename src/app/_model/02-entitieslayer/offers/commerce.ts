import {EntityBase} from "../entityBase";

export class Commerce extends EntityBase{
    name: String;
    regNumber: String;

    constructor(){
        super();
        this.name=null;
        this.regNumber=null;
    }
}