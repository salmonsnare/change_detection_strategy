import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <p><input type="text" [(ngModel)]="message.name"></p>
    <default [message]="message"></default>
    <on-push [message]="message"></on-push>
    </div>`
})
export class AppComponent {
  message: {name: string} = {name:null};
}
