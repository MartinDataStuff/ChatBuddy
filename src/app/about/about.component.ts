import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatbuddy-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  whyChatBuddyExpanded = true;
  whoAreWeExpanded = false;
  constructor() { }

  ngOnInit() {
  }

  toggleWhyChatBuddy(){
    this.whyChatBuddyExpanded = !this.whyChatBuddyExpanded;
  }

  toggleWhoAreWe(){
    this.whoAreWeExpanded = !this.whoAreWeExpanded;
  }
}
