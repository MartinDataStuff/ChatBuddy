import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LobbyComponent} from './lobby/lobby/lobby.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './facebook-auth/login/login.component';
import {ChatroomComponent} from './chat-room/chatroom/chatroom.component';
import {AuthGuard} from "./facebook-auth/auth-guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', redirectTo: 'login', pathMatch: 'full'},
{  path: 'login', component: LoginComponent },
  {  path: 'lobby', component: LobbyComponent, canActivate: [AuthGuard] },
  {  path: 'contact', component: ContactComponent },
  {  path: 'chatroom/:id', component: ChatroomComponent, canActivate: [AuthGuard] },
{  path: 'about', component: AboutComponent }];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ChatBuddyRoutingModule {}
