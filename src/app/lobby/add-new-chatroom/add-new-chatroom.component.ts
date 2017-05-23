import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'chatbuddy-add-new-chatroom',
  templateUrl: './add-new-chatroom.component.html',
  styleUrls: ['./add-new-chatroom.component.css']
})
export class AddNewChatroomComponent implements OnInit {

  chatRoomName: string;
  chatRoomPassword: string;
  addingRoomIsExpanded: boolean;
  privacyEnabled: boolean;
  anonymousEnabled: boolean;
  constructor() { }

  ngOnInit() {
    this.chatRoomName = "";
    this.chatRoomPassword = "";
    this.privacyEnabled = false;
    this.anonymousEnabled = false;
  }

  toggleAddingRoom(){
    this.addingRoomIsExpanded = !this.addingRoomIsExpanded;
  }

  togglePrivacy(){
    this.privacyEnabled = !this.privacyEnabled;
  }

  toggleAnonymous(){
    this.anonymousEnabled = !this.anonymousEnabled;
  }

}
