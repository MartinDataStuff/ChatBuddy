import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, HostListener } from '@angular/core';
import {ResizeEvent} from 'angular2-resizable';

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

  constructor() {
  }

  ngOnInit() {
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
