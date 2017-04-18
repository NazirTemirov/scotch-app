import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from 'app/logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  ninjas = [];

  term = '';

  constructor(private logger: LoggingService, private dataService: DataService) {}

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
    /*this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    );*/

    this.bindEventsFromFirebase();
  }

  bindEventsFromFirebase() {
    var ref = firebase.database().ref('/ninjas/');

    ref.on('child_added', (snapshot) => {
        this.ninjas.push(snapshot.val());
    });
    ref.on('child_removed', (snapshot) => {
        this.ninjas[snapshot.val().key];
    });
  }

  setNinjas(ninjas) {
    this.ninjas = [ninjas];
  }

  fbPostData(name, belt) {
    var key = firebase.database().ref().child('ninjas').push().key;

    var ninja = {
      key: key,
      name: name,
      belt: belt
    };
    
    var updates = {};
    updates['/ninjas/' + key] = ninja;
    firebase.database().ref().update(updates);
  }

  fbRemoveData(key){
    var ref = firebase.database().ref('/ninjas/' + key);

    ref.remove();
  }

}
