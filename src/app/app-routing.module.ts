import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'


// Other imports removed for brevity


import { paths } from './app.paths';
import { NotFoundComponent } from './modules/not-found/not-found.component';


import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';

import { StudentListComponent } from './modules/student/student-list/student-list.component'
import { StudentDetailComponent } from './modules/student/student-detail/student-detail.component';

import { PathResolveService } from './services/path-resolve.service';
import { GstGetComponent } from './modules/business/gst-get/gst-get.component';
import { GstAddComponent } from './modules/business/gst-add/gst-add.component';
import { GstEditComponent } from './modules/business/gst-edit/gst-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NewsComponent } from './modules/news/news.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { CourseComponent } from './modules/course/course.component';
import { SignupFormComponent } from '../app/modules/signup-form/signup-form.component';
import { NewCourseFormComponent } from './modules/new-course-form/new-course-form.component';
import { ChangePasswordComponent } from '../app/modules/change-password/change-password.component';
import { StudentModule } from './modules/student/student.module';


// const routes: Routes = [
//     // { path: '', pathMatch: 'full', redirectTo: paths.LOGIN },
//     // { path: paths.LOGIN, component: LoginComponent },
//     { path: '', component: HomeComponent },
//     //{ path: paths.HOME, component: HomeComponent, canActivate: [AuthGuard] },
//     { path: paths.HOME, component: HomeComponent },
//     { path: paths.NEWS, component: NewsComponent },
//     { path: paths.ABOUT, component: AboutComponent },
//     { path: paths.CONTACT, component: ContactComponent },
//     { path: paths.STUDENTLIST, component: StudentListComponent },
//     { path: paths.STUDENTDETAILS, component: StudentDetailComponent },
//     { path: paths.BUSINESS, component: GstGetComponent },
//     { path: paths.CREATE_BUSINESS, component: GstAddComponent },
//     { path: paths.EDIT_BUSINESS, component: GstEditComponent },
//     { path: '**', resolve: { path: PathResolveService }, component: NotFoundComponent }
// ];

const routes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        canActivate: [AuthGuard],
        //pathMatch: 'full',
        children: [
            { path: '', component: HomeComponent },
            { path: paths.HOME, component: HomeComponent },
            { path: paths.NEWS, component: NewsComponent },
            { path: paths.ABOUT, component: AboutComponent },
            { path: paths.CONTACT, component: ContactComponent },
            { path: paths.COURSE, component: CourseComponent },
            { path: paths.ADDCOURSE, component: NewCourseFormComponent },
            // { path: paths.STUDENTLIST, component: StudentListComponent },
            // { path: paths.STUDENTDETAILS, component: StudentDetailComponent },
            { path: paths.BUSINESS, component: GstGetComponent },
            { path: paths.CREATE_BUSINESS, component: GstAddComponent },
            { path: paths.EDIT_BUSINESS, component: GstEditComponent },
            { path: paths.CHANGEPASSWORD, component: ChangePasswordComponent },
            //{ path: paths.STUDENT, loadChildren: './modules/student/student.module#StudentModule' } // this is lazy laoding
            { path: paths.STUDENT, loadChildren: () => StudentModule }
        ]
    },
    {
        path: '', component: LoginLayoutComponent,
        children: [
            { path: paths.LOGIN, component: LoginComponent },
            { path: paths.SIGNUP, component: SignupFormComponent }
        ]
    },
    { path: '**', resolve: { path: PathResolveService }, component: NotFoundComponent }
];

// Other code removed for brevity

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }