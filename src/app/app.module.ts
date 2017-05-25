import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ResizableModule} from 'angular2-resizable';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {ChatBuddyRoutingModule} from './chat-buddy-routing.module';
import { LobbyComponent } from './lobby/lobby/lobby.component';
import { LoginComponent } from './facebook-auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChatroomComponent } from './chat-room/chatroom/chatroom.component';
import { FacebookService } from 'ng2-facebook-sdk';
import { SettingsComponent } from './settings/settings.component';

import { AlertModule } from 'ng2-bootstrap';
import { ChatSettingsComponent } from './chat-room/chat-settings/chat-settings.component';
import { ChatOutputComponent } from './chat-room/chat-output/chat-output.component';
import { ChatInputComponent } from './chat-room/chat-input/chat-input.component';
import { TopOfSectionComponent } from './top-of-section/top-of-section.component';
import {UserService} from './gateway-service/user-gateway-service';
import { UserCredentialInputComponent } from './facebook-auth/login/user-credential-input/user-credential-input.component';
import { AddNewChatroomComponent } from './lobby/add-new-chatroom/add-new-chatroom.component';
import { RegisterUserComponent } from './facebook-auth/login/register-user/register-user.component';
import {AuthenticationService} from './gateway-service/authentication-service.service';
import {AlertService} from './gateway-service/alert.service';
import { UserProfileMiniComponent } from './chat-room/user-profile-mini/user-profile-mini.component';
import {AuthGuard} from "./facebook-auth/auth-guard";

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
    SettingsComponent,
    ChatSettingsComponent,
    ChatOutputComponent,
    ChatInputComponent,
    TopOfSectionComponent,
    UserCredentialInputComponent,
    AddNewChatroomComponent,
    RegisterUserComponent,
    UserProfileMiniComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Angular2FontawesomeModule,
    FlexLayoutModule,
    ChatBuddyRoutingModule,
    BrowserAnimationsModule,
    ResizableModule

  ],
  providers: [
    FacebookService,
    UserService,
    AuthenticationService,
    AuthGuard,
    AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
