import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu-btn',
  templateUrl: './menu-btn.component.html',
  styleUrl: './menu-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.active]': 'active()',
    '(click)': 'active.set(!active())',
  },
})
export class MenuBtnComponent {
  active = signal(false);
}
