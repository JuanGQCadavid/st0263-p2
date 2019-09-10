import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { Observable, of } from 'rxjs';
import { UserWrapper } from '../shared/userWrapper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userWrapper: UserWrapper;

  constructor(private http: HttpClient) {
    this.userWrapper = {
      user: null
    }
  }

  login(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<User>(baseURL + 'users/login',
      {username: user.username, password: user.password}, httpOptions)
      .subscribe((response) => { this.userWrapper.user = user });
  }

  logout() {
    this.userWrapper.user = null;
  }

  signup(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<User>(baseURL + 'users/signup',
      {username: user.username, password: user.password}, httpOptions)
      .subscribe((response) => { this.userWrapper.user = user });
  }

  getUserWrapper() : Observable<UserWrapper> {
    return of (this.userWrapper);
  }

  getUsername() : Observable<string> {
    return (this.userWrapper.user) ? of (this.userWrapper.user.username) : null;
  }
}
