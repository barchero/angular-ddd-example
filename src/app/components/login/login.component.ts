import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit{


    constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute){}
    error = null;
    returnUrl = null;

    loginDto={
        loginName: null,
        password: null
    }

    login(){
        this.http.post('https://cabsa.azurewebsites.net/api/login', this.loginDto)
        .subscribe((data) => {
            sessionStorage.setItem('token',JSON.stringify(data));
            this.router.navigate([this.returnUrl]);
        },
        (error) => {
            this.error= error.error;
        });
    }
    
    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
    }
}