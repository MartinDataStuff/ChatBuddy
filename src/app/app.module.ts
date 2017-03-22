import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { HomeComponent } from './home/home.component';
import {ChatBuddyRoutingModule} from "./chat-buddy-routing.module";
import { LobbyComponent } from './lobby/lobby/lobby.component';
import { LoginComponent } from './facebook-auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChatroomComponent } from './chat-room/chatroom/chatroom.component';
import { FacebookService } from 'ng2-facebook-sdk';

export const firebaseConfig = {
  apiKey: "AIzaSyAdO4NXTo52JDsXs6YG-IdjUFlXjaRfv0M",
  authDomain: "cp2test-f105d.firebaseapp.com",
  databaseURL: "https://cp2test-f105d.firebaseio.com",
  storageBucket: "cp2test-f105d.appspot.com",
  messagingSenderId: "162855485996"
};
export const firebarebaseLoginConfig =  {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LobbyComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    ChatroomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontawesomeModule,
    FlexLayoutModule,
    ChatBuddyRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, firebarebaseLoginConfig)

  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
