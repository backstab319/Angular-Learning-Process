import { Component, OnInit } from '@angular/core';
import { Handbook } from './shared/handbook.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Handbook';

  handbook: Handbook[] = [];

  constructor() {}

  ngOnInit() { }

  getPassedData(data: {title: string, body: string}) {
    this.handbook.push({
      title: data.title,
      body: data.body,
    });
  }

}
