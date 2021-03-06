import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('https://nn-angular-f7b88.firebaseio.com/.json').map(
        (res) => res.json()
      );
  }

}
