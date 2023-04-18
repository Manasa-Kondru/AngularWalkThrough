import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent {

constructor(private fb:FormBuilder,public authService:AuthService,private r:Router)
{

 
}


f= this.fb.group(
  {
  email : ["m@gmail.com",Validators.required],
  password : this.fb.control("20032001",Validators.required),
  mobile : this.fb.array
  ([
      [],
      []
  ])
  }
)


e  ='';
p  ='';


onClickSubmit(data: any) 
{
 this.e=data.email;
 this.p=data.password;

  console.log("Login page: " +  data.email);
  console.log("Login page: " + this.p);
 
  this.authService.checkLogin(this.e, this.p);
  if(window.localStorage.getItem('isUserLoggedIn')=== "true")
   this.r.navigate(['/introduction'])
   
  else
  window.alert("invalid password or email");
 
  //    .subscribe(
  //      data => 
  //      {console.log("Is Login Success: " + data); 
  //      if(data)
  //       this.r.navigate(['/introduction']);}
  // );
}
 b=window.localStorage.getItem('isUserLoggedIn');

}
