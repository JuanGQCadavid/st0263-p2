import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

import { User } from '../shared/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  user: User;
  signupForm: FormGroup;
  @ViewChild('fform', {static: false}) signupFormDirective;

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

  constructor(private sb: FormBuilder,
    private loginService: LoginService,
    public dialogRef: MatDialogRef<SingupComponent>) {
      this.createForm();
    }

  ngOnInit() {
  }

  createForm() {
    this.signupForm = this.sb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.signupForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.signupForm) { return; }

    const form = this.signupForm;
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
    this.user = this.signupForm.value;
    this.loginService.signup(this.user);
    this.dialogRef.close();
  }

}
