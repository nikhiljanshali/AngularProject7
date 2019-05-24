import { OnInit, AfterViewChecked } from '@angular/core';

import { Component, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from './viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.scss']
})
export class ViewchildParentComponent implements AfterViewChecked {

  @ViewChild(ViewchildChildComponent) child: ViewchildChildComponent;
  //@ViewChild('ViewchildChildComponent') child;

  constructor() { }

  myMessage: string;

  ngAfterViewChecked() {
    this.myMessage = this.child.myMessage;
  }

}
