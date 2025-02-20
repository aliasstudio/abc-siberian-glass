import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrl: './menu-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.active]': 'toggle()',
  },
})
export class MenuBtnComponent {
  toggle = input(true);
}
