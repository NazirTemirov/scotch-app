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

  name = '';
  belt = '';

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
      var ninjas = this.ninjas.filter(function(ninja){
        return ninja; 
      });

      ninjas.push(snapshot.val());
      this.setNinjas(ninjas);
    });
  }

  setNinjas(ninjas) {
    this.ninjas = ninjas;
  }

  fbPostData(name, belt) {
    if(!name || name == '' || !belt || belt == '') {
      return;
    }

    var key = firebase.database().ref().child('ninjas').push().key;

    var ninja = {
      key: key,
      name: name,
      belt: belt
    };
    
    var updates = {};
    updates['/ninjas/' + key] = ninja;
    firebase.database().ref().update(updates);

    this.name = '';
    this.belt = '';
  }

  fbRemoveData(ninja){
    var ref = firebase.database().ref('/ninjas/' + ninja.key);
    ref.remove();
    
    delete this.ninjas[this.ninjas.indexOf(ninja)];

    var ninjas = this.ninjas.filter(function(n){
      return n !== ninja; 
    })

    this.setNinjas(ninjas);
  }
}
