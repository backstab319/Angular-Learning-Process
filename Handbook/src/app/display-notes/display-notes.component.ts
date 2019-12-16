import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  @Input() receivedData;

  constructor() { }

  ngOnInit() {
  }

  deleteNote(i: number) {
    this.receivedData.splice(i, i + 1);
  }

}
