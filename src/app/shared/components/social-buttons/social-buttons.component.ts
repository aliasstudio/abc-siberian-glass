import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SOCIAL } from '@app/app.config';
import { SvgIconComponent } from '@app/shared/components/app-svg-icon/svg-icon.component';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrl: './social-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent],
})
export class SocialButtonsComponent {
  readonly mode = input<'button' | 'icon'>('button');
  readonly size = input(42);

  protected readonly social = SOCIAL;
}
