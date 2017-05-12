import {Component, Input, OnInit} from '@angular/core';
import {ChatUser} from "../chat-user";
import {ChatMessage} from "../chat-message";

@Component({
  selector: 'chatbuddy-chat-output',
  templateUrl: './chat-output.component.html',
  styleUrls: ['./chat-output.component.css']
})
export class ChatOutputComponent implements OnInit {

  @Input()
  chatMessages: ChatMessage[];
  @Input()
  currentUser: ChatUser;
  constructor() { }

  ngOnInit() {
    this.createMockData();
  }

  createMockData(){
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
    this.currentUser = chatUser1;
    //Mock chat messages
    let chatMessage1 = new ChatMessage();
    chatMessage1.ID = "1";
    chatMessage1.user = chatUser1;
    chatMessage1.messageBody = "This is the first chat message, its made by user 1";
    let chatMessage2 = new ChatMessage();
    chatMessage2.ID = "1";
    chatMessage2.user = chatUser1;
    chatMessage2.messageBody = "This is the second chat message, its made by user 1";
    let chatMessage3 = new ChatMessage();
    chatMessage3.ID = "1";
    chatMessage3.user = chatUser2;
    chatMessage3.messageBody = "This is the third chat message, its made by user 2";
    let chatMessage4 = new ChatMessage();
    chatMessage4.ID = "1";
    chatMessage4.user = chatUser1;
    chatMessage4.messageBody = "This is the fourth chat message, its made by user 1";
    let chatMessage5 = new ChatMessage();
    chatMessage5.ID = "1";
    chatMessage5.user = chatUser2;
    chatMessage5.messageBody = "This is the fifth chat message, its made by user 2";
    this.chatMessages = [chatMessage1, chatMessage2, chatMessage3, chatMessage4, chatMessage5];
  }


}
