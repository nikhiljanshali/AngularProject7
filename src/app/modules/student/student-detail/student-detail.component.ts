import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  private id: string;
  student: Student = new Student(-1, 'No Product');
  constructor(private studentService: StudentService, private route: ActivatedRoute) { }
  // constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentDetails(this.id).subscribe((student: Student) => {
      this.student = student;
      //console.log(student);
    })
  }
}
