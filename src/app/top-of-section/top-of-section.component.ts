import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chatbuddy-top-of-section',
  templateUrl: './top-of-section.component.html',
  styleUrls: ['./top-of-section.component.css']
})
export class TopOfSectionComponent implements OnInit {

  @Input()
  title = "noTitle";

  @Input()
  briefText = "noBriefText";

  constructor() { }

  ngOnInit() {
  }

}
