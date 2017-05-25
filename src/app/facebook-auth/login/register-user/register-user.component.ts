import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../../chat-room/user";

@Component({
  selector: 'chatbuddy-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  username: string;

  password: string;

  constructor() { }

  ngOnInit() {
  }


  @Output('userInfoEmitter')
  userInfoEmitter: EventEmitter<User> = new EventEmitter<User>();

  enterCredentials() {
    console.log('Button pressed');
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
}
