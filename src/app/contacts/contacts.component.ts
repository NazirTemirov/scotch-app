import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LoggingService } from "app/logging.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  ninjas = [];

  term = '';

  constructor(private logger: LoggingService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
