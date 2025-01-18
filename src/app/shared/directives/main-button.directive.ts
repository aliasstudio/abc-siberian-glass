import { Directive, input } from '@angular/core';

@Directive({
  selector: 'button[appMainButton]',
  host: {
    '[class.main-button]': 'true',
    '[class.main-button__alt]': 'themeColor() === "alternative"',
  },
})
export class MainButtonDirective {
  themeColor = input<'primary' | 'alternative'>('primary');
}
