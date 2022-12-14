import { AuthServiceService } from './auth-service.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class AuthGaurd implements CanActivate{

  constructor(private authService :AuthServiceService,public router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean > | Promise<boolean > {

    const isAuth = this.authService.getIsAuth();

    if(!isAuth)
    {
      this.router.navigate(['/login']);

    }
    return isAuth;

  }
}
