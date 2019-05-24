import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.scss']
})
export class ViewchildChildComponent implements OnInit {

  myMessage = "Hola, Parent I am your child."

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.myMessage = this.myMessage;
    }, 2000);
  }
}
