import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseList = [
    { id: 1001, name: 'Art' },
    { id: 1002, name: 'Development' },
    { id: 1003, name: 'Science' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
