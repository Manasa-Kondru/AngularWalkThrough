import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.css']
})
export class BuiltinPipesComponent {
  
  name = "ANGULAR makes life easy :)";
  salary = 67000;

  person = {
    'name':"Manasa",
    'Mobile_no': 1234567890,
    'gender' :'f'
  }

  dob = new Date();

  num = 0.89;

  company = "blaze automation system";

  wish ="Hello how are you?!"

}
