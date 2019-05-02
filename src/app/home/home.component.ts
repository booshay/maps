import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

returnedRoute: {};
BAF = '42.159385,-72.720768';
BOS = '42.374872,-71.024094';
TAN = '41.874655,-71.015327';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData(this.BAF)
     .subscribe(data => this.returnedRoute = data);
  }

}
