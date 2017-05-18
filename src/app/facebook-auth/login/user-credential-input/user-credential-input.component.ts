import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chatbuddy-user-credential-input',
  templateUrl: './user-credential-input.component.html',
  styleUrls: ['./user-credential-input.component.css']
})
export class UserCredentialInputComponent implements OnInit {

  username: string;

  password: string;

  @Output('usernameEmitter')
  usernameEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Output('passwordEmitter')
  passwordEmitter: EventEmitter<string> = new EventEmitter<string>();

  enterCredentials() {
    console.log('Button pressed');
    console.log(this.username);
    if (this.username === undefined)
      return;
    if (this.username.length === 0)
      return;
    if (this.password === undefined)
      return;
    if (this.password.length === 0)
      return;

    this.usernameEmitter.emit(this.username);
    console.log('After emit');

  }

  constructor() { }

  ngOnInit() {
  }

}
