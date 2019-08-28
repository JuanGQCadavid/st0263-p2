import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

import { User } from '../shared/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  loginForm: FormGroup;
  @ViewChild('fform', {static: false}) loginFormDirective;

  formErrors = {
    'username': '',
    'password': ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required'
    },
    'password': {
      'required': 'Password is required'
    }
  }

  constructor(private lb: FormBuilder,
    private loginService: LoginService,
    public dialogRef: MatDialogRef<LoginComponent>) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.lb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.loginForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }

    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.user = this.loginForm.value;
    this.loginService.login(this.user);
    this.dialogRef.close();
  }

}
