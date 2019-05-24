// student-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const studentRoutes: Routes = [
    {
        path: '',
        component: StudentComponent,
        children: [
            {
                path: 'list',
                component: StudentListComponent
            },
            {
                path: 'detail/:id',
                component: StudentDetailComponent
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    declarations: [],
    exports: [RouterModule]
})
export class StudentRoutingModule { }