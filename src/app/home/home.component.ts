import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from "app/logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Hello world';
  
  constructor(private logger: LoggingService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
