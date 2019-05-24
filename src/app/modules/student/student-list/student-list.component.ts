import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  student: Student[] = [];

  constructor(private productService: StudentService) { }

  ngOnInit() {
    this.productService.getStudents().subscribe((student: Student[]) => {
      this.student = student;
    })
  }
}
