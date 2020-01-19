import {Commerce} from "./commerce";
import {EntityBase} from "../entityBase";

export class Negotiation extends EntityBase{
    buyer: Commerce;
    seller: Commerce;
    creationDate: Date;
    title: String;

    constructor(){
        super();
        this.buyer = null;
        this.seller = null;
        this.creationDate = null;
        this.title = null;
    }
}