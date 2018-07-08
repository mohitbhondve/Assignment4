import { Component, OnInit ,Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() msg:string;
  @Output() childMsg = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendEvent()
  {
    console.log("send event");
    this.childMsg.emit("send event from child to parent");

  }

}
