import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  classes = {'blue': true, 'red': false, underline: true};
  test = true;

  constructor() {}

  ngOnInit() {
  }

}
