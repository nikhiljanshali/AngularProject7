import { Component, OnInit, HostBinding } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
