import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-app',
  templateUrl: './hello-app.component.html',
  styleUrls: ['./hello-app.component.css']
})
export class HelloAppComponent implements OnInit {
  heading: string;
  constructor() { }

  ngOnInit() {
    this.heading = 'This is from hello-app component';
  }

}
