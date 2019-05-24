import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viainput-parent',
  templateUrl: './viainput-parent.component.html',
  styleUrls: ['./viainput-parent.component.scss']
})
export class ViainputParentComponent implements OnInit {

  parentMessage = "Hello Child, I'm your parent"

  constructor() { }

  ngOnInit() {
  }

}
