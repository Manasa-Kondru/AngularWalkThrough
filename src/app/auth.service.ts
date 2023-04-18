import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService /*implements CanActivate */{

 constructor(private r:Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

//   let loggedin =false;

//   let e= 'manasakondru5@gmail.com';
//   let p ='20032001M'

// if(loggedin){
//   return true;
//   }
//   else{
//     this.r.navigate(['/login-in']);
//     return false;
//   }
// }

// isLoggedIn = true;
//   constructor() { }
// isAuthenticated(){
//     return this.isLoggedIn;
//   }


isUserLoggedIn = false;

checkLogin(email: string, password: string): any{
   // console.log(email);
   // console.log(password);
   this.isUserLoggedIn =           email == 'm@gmail.com' && password == '20032001';
   window.localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); // setItem(key: string, value: string): void;this.isUserLoggedIn :now acts as token
   // let o = new Observable
   //     return of(this.isUserLoggedIn).pipe(
   // delay(1000),
   // tap(val => { 
   //    console.log("Is User Authentication is successful: " + val); 
   
   }
   //)
//);


logout(): void {
this.isUserLoggedIn = false;
window.localStorage.removeItem('isUserLoggedIn'); 
 this.r.navigate(['/login-in']); 
}

}
