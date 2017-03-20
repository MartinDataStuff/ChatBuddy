import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatbuddy-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  dotCounter: number;
  isTyping: boolean;
  chatOutput: string;
  chatInput:string;
  constructor() {
    this.dotCounter = 1;
  }

  get getDotCounter(){
    return this.dotCounter;
  }

  ngOnInit() {
    this.startDotCounter(1000);
  }

  enterText(){
  this.chatOutput = this.chatInput;
  this.chatInput = "";
    console.log("dotCounter: "+this.dotCounter);
  }

  startDotCounter(interval: number){

    window.setInterval(function(){
      if (!!this.dotCounter === !!NaN && this.dotCounter !== 0)
      {
        console.log("It's not a number")
       this.dotCounter = 0;
      }
      this.dotCounter++;
      this.dotCounter = this.dotCounter % 3; //number after % represents max amount of dots
      console.log("dotCounter: "+this.dotCounter);
    }, interval);
  }

}
