import { Component } from '@angular/core';
import { SimilarContentService } from '../similar-content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  service;
  constructor(private s:SimilarContentService)
  {
   this.service= s.dispalyrightcorner;
  }
end=100
show=false ;
linkText="read more"

toggleArticle()
{
  if(this.show)
  {
    this.show=false;
    this.end=100;
    this.linkText="read more";
  }
  else{
    this.show = true ;
    this.end =this.httpsc.length;
    this.linkText="hide";
  }
}


toggleArticle1()
{
  if(this.show)
  {
    this.show=false;
    this.end=100;
    this.linkText="read more";
  }
  else{
    this.show = true ;
    this.end =this.ngtag.length;
    this.linkText="hide";
  }
}


toggleArticle2()
{
  if(this.show)
  {
    this.show=false;
    this.end=100;
    this.linkText="read more";
  }
  else{
    this.show = true ;
    this.end =this.decorators.length;
    this.linkText="hide";
  }
}


attdir=[ "NgClass:adds and removes a set of CSS classes",
"NgStyle:adds and removes a set of HTML styles",
"NgModel:adds two-way data binding to an HTML elements"
]

strucdir=["ngFor",
"ngIf",
"we use asterisk(*) in fornt of all Structural directives","In a "]

ngtags=["'ng-template'","'ng-content'","'ng-container'"]


 decorators =`<ng-container>All the decorators in Angualr represented with @ symbol 
 <ul>
     <li>@NgModule,@component,@Intjectable,@pipe</li>
     <li>define class decorators ,input decorators etc.They are invoked at runtime</li>
     <li>These decorators have metadata
         -has specific meta data,some are mandatory and some are optional
     </li>
     <li>Typescript feature for passing metadata,they are functions which returns functions aka allows us to invoke functions</li>
 <div>
 <b>Types of Decorators in Angular</b>
 </div>
 
     <li>Class Decorators-@NgModule,AComponent</li>
 <li>Property Decorators-@Input,@Output</li>
 <li>Method Decorators-@HostListener</li>
 <li>Parameter Decorators-@Injectable</li>
 </ul>
 </ng-container>`

 ngtag  = ` <p>just like in HTML tags ,similarly we have tags in angular .Few of those are :</p>
 <ng-container *ngFor="let t of ngtags">
     {{t}}
 </ng-container>
 <ol>
<li><b>ng-container:</b> Name itself indicates acts as container ,in this browser ignores the tag and displays the content.<br>
 The advantage is it won't refelect in DOM.<br>
 In angular we could use only one directive in a tag,in such scenarios it will be helpful.<br>
 Whenever we don't wanna apply styles for a particular div, in that cases we could replace div tag with ng-container.
</li>
<li></li>
<li><b>ng-template:</b>The content inside this would not be displayed by browser/angular.<br>
If we would like to display the content then we need to link it with the structural directive like ngSwitch,ngFor,ngIf.<br>
</li>
<li><b>ng-content:</b>It is written in child component as tag in order to ensure to display the content in selector tags of this in parent component</li>
 </ol>`

 httpsc  = `To send request to server to get data to perform CURD operations.
 <ul>
  <li>Everything we make request in browser is called http request and its type is get.</li>
  <li>just like AJAX calls in javascript,these http requests works aka when we click on a link our page should not get refresh .</li>
  <li>get || put || post || delete || patch etc services</li>
  
  <li>Http service is built in service in angular.</li>
  <li>To send request to server we need to specify URL</li>
  <li>And type of request aka get || post || put msg || headers || query parameters || domin name || ip address etc..</li>
  <li>In the get method whatever URL we specify ,the request goes to that particular URL thereby server sends some response.</li>
  <li>To use that response in angular we have a concept called observables in angular aka "subscribe" method .</li>
  <li>Subsribe method gets executed when ever we get data from server.</li>
 </ul> 
 <ol>
  <li>import HttpClientModule in app.module.ts</li>
  <li>import HttpClient class in any component.ts or service.ts</li>
  <li>Inject HttpClient instance in constructor function.</li>
 </ol>`
}


