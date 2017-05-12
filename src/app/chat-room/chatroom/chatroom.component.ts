import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, HostListener } from '@angular/core';
import {ResizeEvent} from 'angular2-resizable';
import { ActivatedRoute } from '@angular/router';
import {ChatRoom} from "../chat-room";
import {ChatUser} from "../chat-user";
@Component({
  selector: 'chatbuddy-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

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
    this.mockChatRooms = [chatRoom0, chatRoom1,chatRoom2];
    this.chatRoom = new ChatRoom();
    this.chatRoom.usersInRoom = [chatUser1];
  }

  ngOnInit() {
    this.chatRoom = new ChatRoom();
    this.chatRoom = this.mockChatRooms[1]
    this.sub = this.route.params.subscribe(params => {
      this.chatRoomID = +params['id'];
      this.chatRoom = this.mockChatRooms[this.chatRoomID];
    });

    this.dotCounter = 1;
    this.autoScrollingEnabled = true;
    this.startDotCounter(500); //Increase dot counter every half second, using half second to keep faster update in detecting writing or not writing.
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

  enterText() {
   if (this.chatInput === undefined)
     return;
   if (this.chatInput.length === 0)
     return;
    this.chatOutput = this.chatOutput + "\n"+this.chatInput;
    this.chatInput = "";
    console.log("dotCounter: " + this.dotCounter);
  }

  startDotCounter(interval: number) {
    window.setInterval(this.increaseDotCounter, interval);
  }

  increaseDotCounter = () => {
    {
      this.isTyping = this.chatInput && this.chatInput.length > 0; //check if typing
      if (!this.isTyping) {
        this.dotCounter = 0;
        return; //return if not typing.
      }
      if (!!this.dotCounter === !!NaN && this.dotCounter !== 0) {
        console.log("It's not a number")
        this.dotCounter = 0; //If not a number and not 0, where 0 is the start number for the
      }

      this.dotCounter = this.dotCounter % 4; //number after % represents max amount of dots
      console.log("dotCounter: " + this.dotCounter);
      this.dotCounter++;
    }
  }
}


//This section was part of the code used in the resizable user list, user list is as of now not resizable.
export class Demo {

  public style: Object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

}
