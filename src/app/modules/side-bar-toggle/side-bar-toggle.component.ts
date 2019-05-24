import { Component, HostListener } from '@angular/core';
import { SideBarService } from '../../services/side-bar.service';
import { HttpClientBackendService } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.scss']
})
export class SideBarToggleComponent {

  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    this.sideBarService.toggle();
  }


}
