import { Component, OnInit } from '@angular/core';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';
import {UserService} from '../../gateway-service/user-gateway-service';

@Component({
  selector: 'chatbuddy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FacebookService, private us: UserService) {

   // let fbParams: FacebookInitParams = {
   //    appId: '662555623935980',
   //    xfbml: true,
   //    version: 'v2.8'
   //  };
    /*this.fb.init(fbParams);*/
  }
  ngOnInit() {
  }

}
