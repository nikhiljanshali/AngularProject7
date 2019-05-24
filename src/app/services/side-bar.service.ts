import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })

export class SideBarService {
  isOpen = false;

  //constructor() { }
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}
