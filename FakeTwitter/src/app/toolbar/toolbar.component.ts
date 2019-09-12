import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';

import { LoginComponent } from '../login/login.component';
import { SingupComponent } from '../singup/singup.component';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: string;
  subscription : Subscription;

  constructor(private authService: AuthService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log('toolbar: ' + name); this.user = name; });
  }

  openLoginForm() {
    this.dialog.open(LoginComponent);
  }

  openSignUpForm() {
    this.dialog.open(SingupComponent);
  }

  logOut() {
    this.authService.logOut();
  }
}
