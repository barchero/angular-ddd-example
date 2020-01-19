import {EntityBase} from "../entityBase";

export class User extends EntityBase{
    email: string;
    name: string;
    password: string;

    constructor(){
        super();
        this.email = null;
        this.name = null;
        this.password = null;
    }
}