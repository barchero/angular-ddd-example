import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        let token:any = JSON.parse(sessionStorage.getItem('token'));

        if(request.url.startsWith('https://cabsa.azurewebsites.net')){
            if(token !== null){
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token.accessToken}`
                    }
                });
            }
        }
        

        return next.handle(request);
    }
}