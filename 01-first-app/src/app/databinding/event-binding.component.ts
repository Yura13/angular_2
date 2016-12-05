import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onCliked()">Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>();

  onCliked() {
    this.clicked.emit('It works!');
  }
}
