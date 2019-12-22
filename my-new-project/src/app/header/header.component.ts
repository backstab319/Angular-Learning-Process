import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  componentName: string;

  @Output() showComponent = new EventEmitter<string>();

  passComponentName(componentName: string) {
    this.showComponent.emit(componentName);
  }

}
