import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    if (localStorage.getItem('UserDetails') !== null) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);;
    }
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) { }

  login(user: User) {
    if (user.userName !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    if (localStorage.getItem('UserDetails') !== null) {
      localStorage.removeItem('UserDetails');
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
    } else {
      console.error('Error in Login');
    }
  }
}
