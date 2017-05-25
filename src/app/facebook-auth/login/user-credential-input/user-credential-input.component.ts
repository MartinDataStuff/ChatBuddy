import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User} from "../../../chat-room/user";

@Component({
  selector: 'chatbuddy-user-credential-input',
  templateUrl: './user-credential-input.component.html',
  styleUrls: ['./user-credential-input.component.css']
})
export class UserCredentialInputComponent implements OnInit {

  username: string;

  password: string;

  @Output('userInfoEmitter')
  userInfoEmitter: EventEmitter<User> = new EventEmitter<User>();

  enterCredentials() {
    if (this.username === undefined)
      return;
    if (this.username.length === 0)
      return;
    if (this.password === undefined)
      return;
    if (this.password.length === 0)
      return;

    let user = new User();
    user.name = this.username;
    user.password = this.password;
    console.log('Emit begins');
    this.userInfoEmitter.emit(user);
    console.log('After emit');
  }

  constructor() { }

  ngOnInit() {
  }

}
