import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class TextBlockComponent {
  /**
   * Размер иконки в px
   */
  size = input<number>(77);
  /**
   * Имя иконки.
   * Должна быть помещена в assets/icons/*.*
   */
  icon = input.required<string>();
  /**
   * Текст в блоке
   */
  text = input.required<string>();
}
