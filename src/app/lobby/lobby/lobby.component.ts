import { Component, OnInit, DoCheck  } from '@angular/core';
import {LobbyRoom} from "../lobby-room";
import {ChatRoom} from "../../chat-room/chat-room";
import {ChatUser} from "../../chat-room/chat-user";

@Component({
  selector: 'chatbuddy-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, DoCheck{

  lobbyRoom: LobbyRoom;
  displayedChatRooms: ChatRoom[];
  searchInput: string;

  constructor() { }

  ngOnInit() {
  this.createMockDataLobbyAndChatRooms();
}


  ngDoCheck(){
    this.search();
  }

  createMockDataLobbyAndChatRooms(){
    let chatUser1 = new ChatUser;
    chatUser1.ID = "1";
    chatUser1.AuthToken = "authtokenchatuser1";
    chatUser1.ChatName = "BobTheGuy";
    chatUser1.FBProfile = "BobsFB";
    chatUser1.ProfileImgPath = "noImg";
    let chatUser2 = new ChatUser;
    chatUser2.ID = "2";
    chatUser2.AuthToken = "authtokenchatuser2";
    chatUser2.ChatName = "BobTheGuy2";
    chatUser2.FBProfile = "BobsFB2";
    chatUser2.ProfileImgPath = "noImg2";
    let chatRoom1 = new ChatRoom();
    chatRoom1.ID = "1";
    chatRoom1.title = "ChattyRoom1";
    chatRoom1.isAnonymous = false;
    chatRoom1.isPrivate = false;
    chatRoom1.usersInRoom = [chatUser1, chatUser2];
    let chatRoom2 = new ChatRoom();
    chatRoom2.ID = "2";
    chatRoom2.title = "ChattyRoom2";
    chatRoom2.isAnonymous = false;
    chatRoom2.isPrivate = false;
    chatRoom2.usersInRoom = [chatUser1, chatUser2, chatUser1, chatUser2];

    this.lobbyRoom = new LobbyRoom();
    this.lobbyRoom.ID = "1",
      this.lobbyRoom.title = "ChattyRoom1",
      this.lobbyRoom.chatRooms = [chatRoom1, chatRoom2, chatRoom1, chatRoom2];
    this.displayedChatRooms = this.lobbyRoom.chatRooms;
  }

  search(){
    //console.log(this.searchInput);
    if (this.searchInput === undefined)
      return;
    if (this.searchInput.length <= 2)
    {
      this.displayedChatRooms = this.lobbyRoom.chatRooms;
    }
    else if (this.searchInput.length > 2)
    {
     // this.displayedChatRooms = new ChatRoom[this.lobbyRoom.chatRooms.length];
      this.displayedChatRooms = this.lobbyRoom.chatRooms.filter(x => x.title.toUpperCase().startsWith(this.searchInput.toUpperCase()));
    }
  }
}
