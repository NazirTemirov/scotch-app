import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!';

  valForHome = {
    name: 'Name',
    color: 'Red'
  };

  onCustomEvent(e) {
    alert('Custom event colled')
  }
}
