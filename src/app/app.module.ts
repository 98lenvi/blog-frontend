import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module to set up application level routing
import {RouterModule,Routes} from '@angular/router';

//components are automatically added on using ng create component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import statement for service (automatically done by vscode)

import { BlogHttpService } from './blog-http.service';

//decoratives, tells nature of declarations
@NgModule({

  

  declarations: [

    //automatically generated

    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    // browser related activities
    BrowserModule,

    //routerModule forRoot method to declare the possible routes in the app
     RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:NotFoundComponent},
        ]), 
    AppRoutingModule
  ],
  // Added BlogService services (1st step fpr services)
  providers: [BlogHttpService],
  //not library bootstrap, it tells which component to start first
  bootstrap: [AppComponent]
})
export class AppModule { }
