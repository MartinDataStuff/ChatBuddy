import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {MdSnackBarModule, MdSnackBar} from '@angular/material';

@Injectable()
export class AuthenticationService implements OnInit {

  private authURL = 'https://chatbuddyrestapi2.herokuapp.com/auth';
  headers: Headers;
  masterKey = '{\"access_token\": \"32Zk9d6saTr5Ow1Xt0p237o0EaRrblQV\"}';


  constructor(private http: Http, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
  }

  login(username: string, password: string): Observable<any> {

    console.log('Login has begun in Authentication service');
    console.log(this.masterKey);
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    return this.http.post(this.authURL, this.masterKey, {headers: this.headers})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        console.log('Received user: ' + user);
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user.user));
          localStorage.setItem('currentToken', JSON.stringify(user.token));
          this.openSnackBar("Succesfully logged in", "OK");
        }
        else {
          this.openSnackBar("Error code #2", "OK");
        }
      });
  }

  register(username: string, password: string): Observable<any> {

  console.log('Registration began in Authentication service');
  console.log(this.masterKey);
  this.headers = new Headers();
  this.headers.append('Content-Type', 'application/json');
  this.headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
  return this.http.post(this.authURL, this.masterKey, {headers: this.headers})
    .map((response: Response) => {
      // login successful if there's a jwt token in the response
      const user = response.json();
      console.log('Received user: ' + user);
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user.user));
        localStorage.setItem('currentToken', JSON.stringify(user.token));
        this.openSnackBar("Succesfully logged in", "OK");
      }
      else {
        this.openSnackBar("Error code #2", "OK");
      }
    });
}

  // readAllTest(): Observable<User[]> {
  //   return this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .map(response => response.json() as User[]);
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentToken');
    this.openSnackBar("You are now logged out from ChatBuddy", "OK");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
