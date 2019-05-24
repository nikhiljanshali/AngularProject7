import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  appTitle: string = "NG7-Pre[CRUD]"; // OR (either will work)  appTitle = 'myapp';
  imgUrl: string = "../../assets/angular.png";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onLogout() {
    this.authService.logout();
  }
}
