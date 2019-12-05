import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})
export class TestAppComponent implements OnInit {
  heading1: string;
  constructor() { }

  ngOnInit() {
    this.heading1 = 'This is heading from test component';
  }

}
