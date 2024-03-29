import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

import { User } from '../shared/user';
import { AuthService } from '../services/auth.service';

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
      'required': 'Password is required',
      'minLength': 'The password must be at least 8 characters long',
      'pattern': 'The password must contain at least one Upper and Lower case character, at least one number, and a one of the following special characters: #, $, %, !, @, ^, #, &, ?'
    }
  }

  constructor(private sb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<SingupComponent>) {
      this.createForm();
    }

  ngOnInit() {
  }

  createForm() {
    this.signupForm = this.sb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]]
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
    this.authService.signUp(this.user).subscribe(res => {
      if (res.success) {
        this.dialogRef.close(res.success);
      } else {
        console.log(res);
      }
    }, error => {
      console.log(error);
    });
  }
}
