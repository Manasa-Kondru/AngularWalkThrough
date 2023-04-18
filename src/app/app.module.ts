import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { SimilarContentService } from './similar-content.service';
import { BuiltinPipesComponent } from './builtin-pipes/builtin-pipes.component';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { RouterModule ,Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { Content1Component } from './content1/content1.component';

import {HttpClientModule} from '@angular/common/http';
import { MyhttpComponent } from './myhttp/myhttp.component';
import { DataBaseComponent } from './data-base/data-base.component'
import { DatabaseService } from './database.service';
import { LoginInComponent } from './login-in/login-in.component';
import { AuthService } from './auth.service';
import { ContentGuard } from './content.guard';
import { CoursesComponent } from './courses/courses.component';
const routes:Routes = [
{
path:'',redirectTo:"login-in",pathMatch:"full"
},
{
  path:'login-in',component:LoginInComponent 
},
{
path:'introduction',component:IntroductionComponent,canActivate :[ContentGuard] 
},
{
path:'header',component:HeaderComponent
 },
{
path:'sign-up',component:SignUpComponent
},
{
path:'reactive-form',component: ReactiveFormComponent
},
{
path:'content',component:ContentComponent,canActivate :[ContentGuard] 
},
{
path:'content/:content1',component:Content1Component,canActivate :[ContentGuard] 
},
{
path:'builtin-pipes',component:BuiltinPipesComponent,canActivate :[ContentGuard] 
},
{
path:'data-base',component:DataBaseComponent,canActivate :[ContentGuard] 
 },

{
path:'**',component:NotfoundComponent
}

]


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ReactiveFormComponent,
    ContentComponent,
    BuiltinPipesComponent,
    CustomPipesPipe,
    NotfoundComponent,
    HeaderComponent,
    IntroductionComponent,
    Content1Component,
    MyhttpComponent,
    DataBaseComponent,
    LoginInComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,   //  for two-way data binding and template-driven forms
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [SimilarContentService,DatabaseService,AuthService,ContentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
