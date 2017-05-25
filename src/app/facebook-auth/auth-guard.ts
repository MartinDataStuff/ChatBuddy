import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {MdSnackBarModule, MdSnackBar} from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private snackBar: MdSnackBar) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.openSnackBar("Please log in to access the chat service", "OK");
    this.router.navigate(['/login']);
    return false;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
