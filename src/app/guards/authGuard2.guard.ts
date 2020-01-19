import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({ providedIn: 'root' })
export class AuthGuard2 implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private jwtHelper: JwtHelperService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var token = JSON.parse(sessionStorage.getItem('token'));

        if(token !== null && token.accessToken !== null){
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const expectedRoles = childRoute.data.expectedRoles;
        if(expectedRoles == null){
            return this.canActivate(childRoute, state);
        }

        let token = JSON.parse(sessionStorage.getItem('token'))
    
        if(token != null && token.accessToken != null){
            let decodedToken = this.jwtHelper.decodeToken(token.accessToken);
            let roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            if(roles == expectedRoles){
                return this.canActivate(childRoute, state);
            }else{
                return false;
            }
        }

        return false;
        
        
    }
}