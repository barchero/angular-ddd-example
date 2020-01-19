import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";

export class CommerceCache{
    private commerces: Commerce[]=null;

    getCommerces(): Commerce[]{
        return this.commerces;
    }

    getCommerceById(id): Commerce{
        if(this.getCommerces()!=null){
            return this.getCommerces().find(commerce => commerce.id == id);    
        }
        return null;
    }

    setCommerces(commerces: Commerce[]): Commerce[]{
        this.commerces = commerces;
        return this.getCommerces();
    }

    setCommerce(commerce: Commerce): Commerce[]{
        this.commerces[this.commerces.findIndex(c => c.id == commerce.id)]=commerce;
        return this.getCommerces();
    }
}