import {Commerce} from "./commerce";
import {User} from "./user";
import {Negotiation} from "./negotiation";
import {EntityBase} from "../entityBase";

export class Offer extends EntityBase{
    title: String;
    owner: Commerce;
    createdBy: User;
    negotiations: Negotiation[]

    constructor(){
        super();
        this.title= null;
        this.owner= null;
        this.createdBy= null;
        this.negotiations= new Array<Negotiation>();
    }

}