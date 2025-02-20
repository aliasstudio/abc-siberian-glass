import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  /**
   * Размер шрифта в логотипе в px
   */
  size = input<number>(112);
}
