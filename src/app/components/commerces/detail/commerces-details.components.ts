import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AppCacheService} from "@app/services/shared/appCacheService";
import {Commerce} from "@app/_model/02-entitieslayer/offers/commerce";
import {AppService} from "@app/services/shared/appService";
import {PersistenceTecnologies} from "@app/_model/04-utilitieslayer/appUtilities";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'commerces-details-component',
    templateUrl: './commerces-details.component.html'
})
export class CommercesDetailsComponent implements OnInit{
    commerce: Commerce = null;
    commerceNotFound: boolean = false;

    constructor(private route: ActivatedRoute, private appCacheService: AppCacheService, private appService: AppService, private http: HttpClient, private router: Router){}

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        if(id == null){
            this.commerce = new Commerce();
        }else{
            this.loadCommerce(id);
        }
    }

    loadCommerce(id){
        this.commerce = this.cloneObject(this.appCacheService.getCommerceCache().getCommerceById(id));
        if(this.commerce ==  null){
            this.appService
            .getServiceManager()
            .getCommercesService()
            .getCommerceById(id, PersistenceTecnologies.WEB_STORAGE, localStorage).subscribe((data: Commerce) => {
                if(data == null){
                    this.commerceNotFound = true;
                }else{
                    this.commerce = this.cloneObject(data);
                }
            });
        }
    }

    saveCommerce(commerce){
        this.appService.getServiceManager()
        .getCommercesService()
        .saveCommerce(commerce, PersistenceTecnologies.WEB_STORAGE, localStorage).subscribe(
            (data: Commerce) => {
                this.appService.getServiceManager()
                .getCommercesService().getCommerces(PersistenceTecnologies.WEB_STORAGE, localStorage)
                .subscribe(data => {
                    this.appCacheService.getCommerceCache().setCommerces(data);
                    this.router.navigate(['/commerces']);
                })
            }
        )
    }

    cloneObject<T>(obj:T):T{
        return JSON.parse(JSON.stringify(obj));
    }

}