import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = 'xxx';
  WFO = '41.956768,-71.139805';
  key = 'routes';
  key2 = 'summary';
  constructor(private http: HttpClient) { }

  getData(dest) {
    return this.http.get('https://api.tomtom.com/routing/1/calculateRoute/'
    + this.WFO + ':' + dest + '/json?avoid=unpavedRoads&key='
    + this.apiKey).pipe(map(actions => {
      const data = actions[this.key][0][this.key2];
      const trvlTime = Math.round(data.travelTimeInSeconds / 60);
      const trvlDelay = Math.round(data.trafficDelayInSeconds / 60);
      return {travelTime: trvlTime, travelDelay: trvlDelay};
    }));


  }

}


/*
  getData() {
    return this.http.get('https://api.tomtom.com/routing/1/calculateRoute/'
    + this.WFO + ':' + this.BOS + '/json?avoid=unpavedRoads&key='
    + this.apiKey);
  }
  */
