import { Component, OnInit, OnDestroy } from '@angular/core';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';
import {UserService} from '../../gateway-service/user-gateway-service';
import {User} from '../../chat-room/user';
import {AuthenticationService} from '../../gateway-service/authentication-service.service';
import {Router} from '@angular/router';
import {AlertService} from '../../gateway-service/alert.service';
import {Subscription} from "rxjs/Subscription";
import {ChatBuddyRoutingModule} from "../../chat-buddy-routing.module";

@Component({
  selector: 'chatbuddy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  registeringUser: boolean;
  username: string;
  password: string;
  loading = false;
  returnUrl: string = 'http://localhost:4200/login';

  UsersOwnAPIObservable: Subscription;

  constructor(
    private fb: FacebookService,
    private us: UserService,
    private as: AuthenticationService,
    private alertService: AlertService,
    private router: Router) {

   // let fbParams: FacebookInitParams = {
   //    appId: '662555623935980',
   //    xfbml: true,
   //    version: 'v2.8'
   //  };
    /*this.fb.init(fbParams);*/
  }
  ngOnInit() {
    this.registeringUser = false;

  }

  ngOnDestroy() {
    if (this.UsersOwnAPIObservable)
      this.UsersOwnAPIObservable.unsubscribe();
  }

  tryToLogin(event){

    //let user = <User>event;

    console.log('TryToLogin activated');
    console.log(event);
   // console.log("received password:"+user.password);
    //console.log(this.as.readAllTest().subscribe(posts => this.testPosts = posts));
    this.login(event.name, event.password);
  }

  login(username: string, password: string) {
    this.loading = true;
    this.UsersOwnAPIObservable = this.as.login('alex@email.com', 'Alex123').subscribe(
          data => {
            console.log("Login was succesfull, now routing");
            this.router.navigate(['/lobby']);
          },
           error => {
             this.alertService.error(error._body);
             this.loading = false;
           }
    );//user => this.usersOwnAPI = user
    // this.as.login(username, password)
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //      error => {
    //      this.alertService.error(error._body);
    //       this.loading = false;
    //     });
  }

  toggleRegisteringUser(){
    this.registeringUser = !this.registeringUser;
  }

}
