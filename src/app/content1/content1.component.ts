import { Component } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component {


  end=100
show=false ;
linkText="...read more"

toggleArticle()
{
  if(this.show)
  {
    this.show=false;
    this.end=100;
    this.linkText="...read more";
  }
  else{
    this.show = true ;
    this.end =this.lifecyclehooks.length;
    this.linkText="hide";
  }
}


  lifecyclehooks  =` <ul>
  <li>Angular is a component based framework. A component in it's life time would be present at any of the stages below.</li>
  <li>Based upon its stage the angular provides certain methods ,those are called as HOOKS, aka hooks :methods .</li>
  <li> 8 Methods are:For all this methods angular provides an interface,means we cannot directly use those unless we import those . 
      <ol>
          <li>ngOnChanges() - eg : we can add scroll event || click event     p->c    -onChanges interface</li>
          <li>ngOnInit() -OnInit interface</li>
          <li>ngDocheck() p->c   -Docheck interface</li>
          <li>ngAfterViewInit() -AfterViewInit interface</li>
          <li>ngAfterViewChecked() -AfterViewChecked interface</li>
          <li>ngAfterContentInit() -AfterContentInit interface</li>
          <li>ngAfterContentChecked() -AfterContentChecked interface</li>
          <li>ngOnDestory() -OnDestory interface</li>
      </ol>
  </li>
  <li>Sequential order: ngOnChanges || ngOnInit </li>
  <li><b>ngOnChanges() :</b>
  when this component is getting input from another component,based upon changes if we wanna perform any action.
<br>It detects only when entire property changes, rather than just array string or particular index value.
</li>
  <li>Like a parent and child component relationship.aka from a parent component to child component data is arriving,that time this mehtod get exeutes.</li>
<li><b>ngOnInit() :</b>Whenever a component gets created in angular ,then this method would be called.</li>
<li><b>ngDocheck() :</b>We will write it in child component.Compliment to ngOnChanges.</li>
<li><b>ngAfterViewInit():</b> The HTML file in angular we call it as view .If we wanna do any task after DOM tree has been created</li>
<li><b>ngAfterViewChecked() :</b>If we wanna do any task after DOM has changed due to any directives like ngFor || ngIf || ngSwitch</li>
<li><b>ngAfterContentInit() :</b>If we wanna do any task when content in child component would get displayed via ng-content tag.</li>
<li><b>ngAfterContentChecked() :</b>If we wanna do any task when any changes made to projected data</li>
<li><b>ngOnDestory() :</b>Whenever we are switching from one component to another ,which means earlier component has gotten destory.</li>

<h5>NOTE:</h5><ol><li>ngOnInit nd ngOnDestory can be used in any component</li></ol>
</ul>`

}
