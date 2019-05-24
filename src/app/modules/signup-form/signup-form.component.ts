import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { UsernameValidator } from './username.validators';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  form = new FormGroup({
    //username: new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidator.cannotContainSpace]),
    username: new FormControl('', Validators.required, UsernameValidator.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }


  login() {
    // let isValid = authsService.login(this.form.value);
    // if (isValid) {

    // }
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
