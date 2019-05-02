import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

returnedRoute: {};
key = 'routes';
key2 = 'summary';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
     .subscribe(data => this.returnedRoute = data[this.key][0][this.key2]);
  }

}
