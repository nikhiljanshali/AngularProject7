import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app-routing.module";
import { StudentModule } from "./modules/student/student.module";

import { AppComponent } from "./app.component";
import { NavComponent } from "./modules/nav/nav.component";

import { HomeComponent } from "./modules/home/home.component";
import { AboutComponent } from "./modules/about/about.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { NotFoundComponent } from "./modules/not-found/not-found.component";
import { PathResolveService } from "./services/path-resolve.service";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
//import { InMemoryWebApiModule } from "angular-in-memory-web-api";
//import { DataService } from "./data.service";

//import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { NgxSpinnerModule } from 'ngx-spinner';
//import { ToastrModule } from 'ngx-toastr';


import { GstGetComponent } from './modules/business/gst-get/gst-get.component';
import { GstAddComponent } from './modules/business/gst-add/gst-add.component';
import { GstEditComponent } from './modules/business/gst-edit/gst-edit.component';
import { BusinessService } from './modules/business/business.service';
import { NewsApiService } from './services/news-api.service';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './modules/news/news.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HttpErrorInterceptor } from './services/http-error.interceptor';
import { SideBarComponent } from '../app/modules/side-bar/side-bar.component';
import { SideBarToggleComponent } from '../app/modules/side-bar-toggle/side-bar-toggle.component';
import { SideBarService } from './services/side-bar.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './modules/child/child.component';
import { CourseComponent } from './modules/course/course.component';
import { SignupFormComponent } from '../app/modules/signup-form/signup-form.component';
import { NewCourseFormComponent } from './modules/new-course-form/new-course-form.component';
import { ChangePasswordComponent } from '../app/modules/change-password/change-password.component';
import { PersonalInformationComponent } from './modules/personal-information/personal-information.component';
import { ViainputParentComponent } from './component/data-sharing/viaInput/viainput-parent.component';
import { ViainputChildComponent } from './component/data-sharing/viaInput/viainput-child.component';
import { ViewchildParentComponent } from './component/data-sharing/viaViewChild/viewchild-parent.component';
import { ViewchildChildComponent } from './component/data-sharing/viaViewChild/viewchild-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    GstGetComponent,
    GstAddComponent,
    GstEditComponent,
    LoginComponent,
    NewsComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    SideBarComponent,
    SideBarToggleComponent,
    ParentComponent,
    ChildComponent,
    CourseComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PersonalInformationComponent,
    ViainputParentComponent,
    ViainputChildComponent,
    ViewchildParentComponent,
    ViewchildChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StudentModule,
    //InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    //SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    //BrowserAnimationsModule, // required animations module
    //ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    PathResolveService,
    BusinessService,
    NewsApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    SideBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
