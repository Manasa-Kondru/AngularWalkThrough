import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators ,FormArray} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  login = new FormGroup(   //creating formgroup instance ||| we can use formBuilder Service also
    {
      uname:new FormControl(null,[Validators.required,Validators.minLength(5)]),//Angular provided validations using Validators class
      email:new FormControl(null,[Validators.required,Validators.email]),
      mobileNums : new FormArray(
        [
          new FormControl(null,Validators.required),
         // new FormControl()
      ]
      ),
      password:new FormControl(null,[Validators.required,Validators.minLength(8),this.upperCaseTest]),//angular checks the password field against validation function whenever it changes 
      cpassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    }
  )

  Add()
  {
   const m= this.login.get('mobileNums') as FormArray;
   m.push(new FormControl(null,Validators.required));
  }

  delete(i:number)
  {
    const m= this.login.get('mobileNums') as FormArray;
    m.removeAt(i);

  }
  isSelected=false;
  show()
  {
   console.log(this.login);
  /* console.log(this.login.value);*/
   this.isSelected=true;
  }


upperCaseTest(c:any)
{
  const pattern=/[A-Z]/
  if(pattern.test(c.value))
  {
    return null;
  }
  return {'noupper':true};
}

//pwd = this.pp ;
//cpwd = this.cp ;
 

equity()
{
  /*let value : boolean =this.pp === this.cp;
  if(value)
  {
    return null;
  }
 
  return{'nomatch':true};
  if( this.login.get('password') === this.login.get('cpassword'))
  return null;
  return {'nomatch':true};
  */
}

}




/*formControl: To control an input array
formGroup: To group multiple formcontrols together
formArray: to group either multiple formcontrols or multiple formgroups together

syntax:  formArray[ formControl,formGroup,formArray]

new formGroup(
  {
  field1 : new formControl(),
  field2 : new formControl(),  //controls in the form of objects aka key-value pair
  field3 : new formControl()
  }
)
new FormArray(
  [
    new formControl(),
    new formGroup(),    //controls in the form of array ,when we don't know how many fields has to create i.e according to user requirment
    new formControl()
  ]
)
*/
