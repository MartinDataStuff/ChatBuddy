import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, HostListener } from '@angular/core';
import {ResizeEvent} from 'angular2-resizable';
import { ActivatedRoute } from '@angular/router';
import {ChatRoom} from "../chat-room";
import {ChatUser} from "../chat-user";
import {ChatMessage} from "../chat-message";
@Component({
  selector: 'chatbuddy-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  currentUser: ChatUser;
  dotCounter: number;
  isTyping: boolean;
  chatOutput: string; //Chat output probably should consist of a List of chatMessage objects. (strings with id of sender etc.)
  chatInput: string;
  autoScrollingEnabled: boolean;
  chatRoom: ChatRoom;
  chatRoomID: any;
  sub: any;
  mockChatRooms: ChatRoom[];

  constructor(private route: ActivatedRoute) {

    //var paramId = params.get("id");
    this.createMockChatRooms();
  }

  createMockChatRooms(){
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
    let chatRoom0 = new ChatRoom();
    chatRoom0.ID = "0";
    chatRoom0.title = "ChattyRoom0";
    chatRoom0.isAnonymous = false;
    chatRoom0.isPrivate = false;
    chatRoom0.usersInRoom = [chatUser1, chatUser2];
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
    this.currentUser = chatUser1;
    this.mockChatRooms = [chatRoom0, chatRoom1,chatRoom2];
    this.chatRoom = new ChatRoom();
    this.chatRoom.usersInRoom = [chatUser1];
    //
  }

  forwardChatOutput(event){
    console.log("Emit received");
    let newMsg = new ChatMessage();
    newMsg.messageBody = event;
    let user = new ChatUser();
    user.ID = this.currentUser.ID;
    user.ChatName = this.currentUser.ChatName;
    newMsg.user = user;
    newMsg.ID = 1+"";
    if (this.chatRoom.messagesInRoom === undefined)
    {
      this.chatRoom.messagesInRoom = [newMsg];
      this.currentUser = this.chatRoom.usersInRoom[0];
    }
    else
    {
      this.chatRoom.messagesInRoom = this.chatRoom.messagesInRoom.concat([newMsg]);

    }
    if (this.currentUser == this.chatRoom.usersInRoom[0])
      this.currentUser = this.chatRoom.usersInRoom[1];
    else if (this.currentUser == this.chatRoom.usersInRoom[1])
      this.currentUser = this.chatRoom.usersInRoom[0];
    console.log(this.chatRoom.messagesInRoom);
    //Find empty slot and put message into it.
    // for(let i = 0; i<40; i++) {
    //   if(this.chatRoom.messagesInRoom[i] === undefined)
    //   {
    //     //Construct message and add it to the chat.
    //     this.chatRoom.messagesInRoom[i] = newMsg;
    //     break;
    //   }
    // }
  }

  public clone(): any {
    var cloneObj = new (<any>this.constructor());
    for (var attribut in this.currentUser) {
      if (typeof this.currentUser[attribut] === "object") {
        cloneObj[attribut] = this.clone();
      } else {
        cloneObj[attribut] = this.currentUser[attribut];
      }
    }
    return cloneObj;
  }

  ngOnInit() {
    this.chatRoom = new ChatRoom();
    this.chatRoom = this.mockChatRooms[1]
    this.sub = this.route.params.subscribe(params => {
      this.chatRoomID = +params['id'];
      this.chatRoom = this.mockChatRooms[this.chatRoomID];
    });

    this.autoScrollingEnabled = true;
     this.chatOutput = "Welcome to the chat!";
  }

  scrollChatToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

 toggleAutoScroll(){
   this.autoScrollingEnabled = !this.autoScrollingEnabled;
 }

  ngAfterViewChecked() {
  if (this.autoScrollingEnabled){
    this.scrollChatToBottom();
  }
  }


}
