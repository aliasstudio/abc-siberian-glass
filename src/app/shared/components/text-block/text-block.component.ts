import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { SVGIcon } from '@app/shared/utils/constants';
import { SvgIconComponent } from '@app/shared/components/app-svg-icon/svg-icon.component';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent],
})
export class TextBlockComponent {
  /**
   * Размер иконки в px
   */
  size = input<number>(77);
  /**
   * Иконка
   */
  icon = input.required<SVGIcon>();
  /**
   * Текст в блоке
   */
  text = input.required<string>();
}
