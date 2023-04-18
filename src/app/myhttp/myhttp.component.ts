import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent {
  constructor(private http:HttpClient){  }

data : any=null ;

  getData(){
    this.http.get('https://fakestoreapi.com/products?limit=5') 
    // fakestoreapi.com:domain name || products: route parameter ||after? we call it as query parameter
    .subscribe(
      (data)=>
      {
        this.data = data ;
        console.log(data)
      }
    )
  }

}
