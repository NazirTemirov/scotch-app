import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Hello world';
  myValue = "some text";
  myRequired = true;

  @Input() valFromApp;
  @Output() customEvent = new EventEmitter();

  onMyButtonClick() {
    alert('Somethink');
  }

  fireCustomEvent(e) {
    this.customEvent.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
