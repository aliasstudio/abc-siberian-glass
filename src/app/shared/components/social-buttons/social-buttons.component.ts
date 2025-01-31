import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SOCIAL } from '@app/app.config';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrl: './social-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.effect]': 'effect()' },
})
export class SocialButtonsComponent {
  readonly effect = input(false);
  readonly size = input(42);

  protected readonly social = SOCIAL;
}
