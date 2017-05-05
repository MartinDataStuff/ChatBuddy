import {Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'chatbuddy-chat-settings',
  templateUrl: './chat-settings.component.html',
  styleUrls: ['./chat-settings.component.css']
})
export class ChatSettingsComponent implements OnInit {
  @ViewChild('settingsMainDiv') private myScrollContainer: ElementRef;

  @Input()
  SettingsTitle = "Chat settings";

  cogWheelRotation = 0;

  ChatSettingsExpanded: boolean;
  constructor() { }

  ngOnInit() {

    this.ChatSettingsExpanded = false;
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  toggleSettingsExpand(){
    this.ChatSettingsExpanded = !this.ChatSettingsExpanded;
    if (this.ChatSettingsExpanded)
    {
      this.scrollToBottom();
      this.cogWheelRotation = 45;
    }
    else{
      this.cogWheelRotation = 0;
    }

  }

}
