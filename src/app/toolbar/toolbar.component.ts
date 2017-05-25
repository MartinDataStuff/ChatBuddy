import {Component, OnInit, Input} from '@angular/core';
import {User} from "../chat-room/user";
import {AuthenticationService} from "../gateway-service/authentication-service.service";

@Component({
  selector: 'chatbuddy-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  currentUser: User;

 @Input()
  titleofcurrentpage = "noTitle";
  @Input()
  showContent = true;
  constructor(private as: AuthenticationService) { }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) as User;

  }

  logOut(){
    this.currentUser = undefined;
    this.as.logout();
  }

}
