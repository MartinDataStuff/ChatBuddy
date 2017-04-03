import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatbuddy-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  dotCounter: number;
  isTyping: boolean;
  isDisplayingUserList: boolean;
  chatOutput: string;
  chatInput: string;

  constructor() {

    this.dotCounter = 1;
  }

  ngOnInit() {
    //this.initializeJQuery();
    this.startDotCounter(500); //Increase dot counter every half second, using half second to keep faster update in detecting writing or not writing.
  }

  enterText() {
    this.chatOutput = this.chatInput;
    this.chatInput = "";
    console.log("dotCounter: " + this.dotCounter);
  }

  startDotCounter(interval: number) {
    window.setInterval(this.increaseDotCounter, interval);
  }

  toggleUserList(){
    this.isDisplayingUserList = !this.isDisplayingUserList;
  }

  increaseDotCounter = () => {
    {
      this.isTyping = this.chatInput && this.chatInput.length > 0; //check if typing
      if (!this.isTyping) {
        this.dotCounter = 0;
        return; //return if not typing.
      }
        if (!!this.dotCounter === !!NaN && this.dotCounter !== 1) {
          console.log("It's not a number")
          this.dotCounter = 1; //If not a number and not 0, where 0 is the start number for the
        }

        this.dotCounter = this.dotCounter % 6; //number after % represents max amount of dots
        console.log("dotCounter: " + this.dotCounter);
      this.dotCounter++;
    }
  }

}


