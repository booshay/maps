import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = '***';
  BOS = '42.374872, -71.024094';
  WFO = '41.956768, -71.139805';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://api.tomtom.com/routing/1/calculateRoute/41.956768,-71.139805:42.374872,-71.024094/json?avoid=unpavedRoads&key=***');
  }

}
