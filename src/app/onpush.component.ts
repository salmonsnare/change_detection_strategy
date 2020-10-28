import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'on-push',
    template: `
    ChangeDetectionStrategy.OnPush: <p>{{message.name}}</p>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
  })
  export class OnPush {
    @Input() message: {name: string};
  }
  