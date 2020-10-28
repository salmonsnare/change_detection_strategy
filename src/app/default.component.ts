import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'default',
  template: `
  ChangeDetectionStrategy.Default: <p>{{message.name}}</p>
  `,
  changeDetection:ChangeDetectionStrategy.Default
})
export class Default {
  @Input() message: {name: string};
}
