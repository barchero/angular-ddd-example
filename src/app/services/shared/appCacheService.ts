import {Injectable} from "@angular/core";
import {CommerceCache} from "./caches/commerceCache";

@Injectable({
    providedIn: 'root'
})
export class AppCacheService{

    private commerceCache: CommerceCache = null;

    getCommerceCache(): CommerceCache{
        this.commerceCache = this.commerceCache || new CommerceCache();
        return this.commerceCache;
    }

    resetCache(){
        this.commerceCache=null;
    }
}