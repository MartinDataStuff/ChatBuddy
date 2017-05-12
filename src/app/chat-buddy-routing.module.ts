import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LobbyComponent} from "./lobby/lobby/lobby.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./facebook-auth/login/login.component";
import {ChatroomComponent} from "./chat-room/chatroom/chatroom.component";
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {  path: 'home', component: HomeComponent },
{  path: 'login', component: LoginComponent },
  {  path: 'lobby', component: LobbyComponent },
  {  path: 'contact', component: ContactComponent },
  {  path: 'chatroom/:id', component: ChatroomComponent },
{  path: 'about', component: AboutComponent }];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ChatBuddyRoutingModule {}
