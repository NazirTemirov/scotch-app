import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  ninjas = [
    {name: 'Yoshi', belt: 'black'},
    {name: 'Rui', belt: 'red'},
    {name: 'Crystal', belt: 'purple'}
  ];

  constructor() {}

  ngOnInit() {
  }

}
