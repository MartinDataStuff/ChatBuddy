import { Component, OnInit, Input } from '@angular/core';
import {User} from "../user";
import '@angular/material';

@Component({
  selector: 'chatbuddy-user-profile-mini',
  templateUrl: './user-profile-mini.component.html',
  styleUrls: ['./user-profile-mini.component.css']
})
export class UserProfileMiniComponent implements OnInit {
  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
