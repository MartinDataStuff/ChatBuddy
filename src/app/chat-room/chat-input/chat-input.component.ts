import {Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chatbuddy-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  dotCounter: number;
  isTyping: boolean;
  @Output('chatOutput')
  chatOutput: EventEmitter<string> = new EventEmitter<string>(); //Chat output probably should consist of a List of chatMessage objects. (strings with id of sender etc.)
  chatInput: string;
  constructor() { }

  ngOnInit() {
    this.dotCounter = 1;
    this.startDotCounter(500); //Increase dot counter every half second, using half second to keep faster update in detecting writing or not writing.

  }
  enterText() {
    console.log("Button pressed");
    console.log(this.chatInput);
    if (this.chatInput === undefined)
      return;
    if (this.chatInput.length === 0)
      return;

    this.chatOutput.emit(this.chatInput);
    console.log("After emit");
    this.chatInput = "";
    console.log("End of button press");
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
