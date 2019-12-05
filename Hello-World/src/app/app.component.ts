import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello world';
  heading: string;
  constructor() { }

  ngOnInit() {
    this.heading = 'This is a heading from app component';
  }
}
