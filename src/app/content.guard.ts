
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';


import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContentGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | UrlTree
      
      {
         // let url: string = state.url;
   
         //     return this.checkLogin(url);
         // }
   
         // checkLogin(url: string): any/*true | UrlTree*/ {
         //    console.log("Url: " + url)
         //    let val: any = localStorage.getItem('isUserLoggedIn');
   
         //    if(val != null && val == "true"){
         //       if(url == "/login")
         //          this.router.parseUrl('/introduction');
         //       else 
         //          return true;
         //    } 
         //    else {
         //       return this.router.parseUrl('/login-in');
         //    }
        const t= this.authService.isUserLoggedIn ;

         if(window.localStorage.getItem('isUserLoggedIn'))
         {
         //  window.alert("U don't have permission to view this page");
            return t;
         }
         else
         {
            return t ;
         }
         }
  }
  

