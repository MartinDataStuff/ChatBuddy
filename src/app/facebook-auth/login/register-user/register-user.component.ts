import {Component, OnInit, Output, EventEmitter, DoCheck} from '@angular/core';
import {User} from "../../../chat-room/user";
import {MdSnackBarModule, MdSnackBar} from '@angular/material';

@Component({
  selector: 'chatbuddy-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements DoCheck {

  email: string;

  password: string;

  name: string;

  picture: string;

  usernameApproved: boolean = true;
  passwordApproved: boolean = true;
  nameApproved: boolean = true;
  pictureApproved: boolean = true;

  role: string; //TODO role wasn't set in class, needs to be later.
  constructor(private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  @Output('userInfoEmitter')
  userInfoEmitter: EventEmitter<User> = new EventEmitter<User>();

  enterCredentials() {
    console.log('Login button pressed');
    if (this.email === undefined)
      return;
    if (this.email.length === 0)
      return;
    if (this.password === undefined)
      return;
    if (this.password.length === 0)
      return;

    if (this.verifyCredentials)
    {
    let user = new User();
    user.name = this.email;
    user.password = this.password;
    user.chatName = this.name;
    user.picture = this.picture;
    console.log(user);
    this.userInfoEmitter.emit(user);
    }
    else {
      //Handle error message
      this.openSnackBar("Please enter the registration information correctly", "OK");
    }
  }

  verifyCredentials(): boolean {
    this.nameApproved = (this.name !== undefined && this.name !== null && this.name.length >= 2);
    this.usernameApproved = (this.email !== undefined && this.email !== null && this.email.length >= 4 && this.email.search('@') > 0);

    this.passwordApproved = (this.password !== undefined && this.password !== null && this.password.length >= 7);
    this.pictureApproved = (this.picture !== undefined && this.picture !== null && this.picture.length >= 4);
    if (!this.nameApproved || !this.usernameApproved || !this.passwordApproved || this.pictureApproved)
      return false;

    return true;
  }

  ngDoCheck() {
    this.verifyCredentials();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
