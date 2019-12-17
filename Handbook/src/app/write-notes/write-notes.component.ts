import { Component, Output, EventEmitter } from '@angular/core';
import { Handbook } from '../shared/handbook.model';

@Component({
  selector: 'app-write-notes',
  templateUrl: './write-notes.component.html',
  styleUrls: ['./write-notes.component.css']
})
export class WriteNotesComponent {

  title: string;
  body: string;
  @Output() passedData = new EventEmitter<{title: string, body: string}>();

  constructor() { }

writeData() {
  this.passedData.emit({
    title: this.title,
    body: this.body,
  });
  this.title = '';
  this.body = '';
  }
}
