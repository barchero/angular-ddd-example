import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api

                this.http.post

                this.router.navigate(['/login'], {queryParams:{returnUrl: this.route.snapshot['_routerState'].url}});
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}