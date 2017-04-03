import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'chatbuddy-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

 @Input()
  titleofcurrentpage = "noTitle";
  constructor() { }

  ngOnInit() {
  }

}
