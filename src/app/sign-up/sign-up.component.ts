import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
expression=true;

constructor(public d: DatabaseService)
{

}

userName="";
email = "";
passWord = '';
gender ='';
subscribe = false;

db:Object=[];
  submit()
  {
  
this.db  = 
{
 'u' :this.userName,'e': this.email,'p': this.passWord,'g':this.gender, 's' :this.subscribe
}

 this.d.datab.push(this.db);
 console.log(this.d.datab);
 
  }

//  We are just sending data to service file from here . To display we need to subscribe the db service file for entire stuff to diplay
 }
























/* l.value.email="manasakondru5@gmail.com";
    console.log(l.value.email);*/
   // console.log(l);
   // l.reset();

   /* l.setValue({
      'personal':
      {
      'username':"Manasa",
      'password':"9848999774@Blaze",
      'email':"manasakondru5@gmail.com",
      'cpassword':"9848999774@Blaze",
        }})
        console.log(l.value);*/


       /* l.patchvalue({
          'username':"Manasa",
          'email':"manasakondru5@gmail.com",
        })*/
       // console.log(l);
        