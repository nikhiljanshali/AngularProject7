import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viainput-child',
  templateUrl: './viainput-child.component.html',
  styleUrls: ['./viainput-child.component.scss']
})
export class ViainputChildComponent implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
