import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
//import {AuthService } from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  success: boolean | undefined;
  adminName!: string;
  adminPassword!: string;
  authService: any;
  



  constructor(
  //  private Auth: AuthService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    var isAuthenticated = this.authService.getAuthStatus();
      if (!isAuthenticated) {
          this.router.navigate(['/login']);
      }
      return isAuthenticated;
  
    }
  }

