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
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import {ChatBuddyRoutingModule} from "./chat-buddy-routing.module";
=======
export const firebaseConfig = {
  apiKey: "AIzaSyAdO4NXTo52JDsXs6YG-IdjUFlXjaRfv0M",
  authDomain: "cp2test-f105d.firebaseapp.com",
  databaseURL: "https://cp2test-f105d.firebaseio.com",
  storageBucket: "cp2test-f105d.appspot.com",
  messagingSenderId: "162855485996"
<<<<<<< HEAD
=======
>>>>>>> e7422341ffeb8a9a4c6ff1591337d7df26d96214

>>>>>>> 9e380874a81e804ba28472a40a17f8efff623111
};
export const firebarebaseLoginConfig =  {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontawesomeModule,
    FlexLayoutModule,
<<<<<<< HEAD
    ChatBuddyRoutingModule
=======
    AngularFireModule.initializeApp(firebaseConfig, firebarebaseLoginConfig)
>>>>>>> e7422341ffeb8a9a4c6ff1591337d7df26d96214
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
