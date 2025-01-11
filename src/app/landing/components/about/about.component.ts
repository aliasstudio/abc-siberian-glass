import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextBlockComponent } from '@app/shared/components/text-block/text-block.component';
import { PlaceholderComponent } from '@app/shared/components/placeholder/placeholder.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextBlockComponent, PlaceholderComponent],
})
export class AboutComponent {
  blocks = [
    {
      id: 'expand',
      icon: 'expand.svg',
      text: 'В ABC Siberian Glass мы видим в стекле возможность расширить границы привычного пространства, добавляя свет и свободу.',
    },
    {
      id: 'appearance',
      icon: 'appearance.svg',
      text: 'Наши конструкции меняют восприятие интерьеров, превращая их в живое взаимодействие архитектуры и окружающего мира.',
    },
    {
      id: 'idea',
      icon: 'idea.svg',
      text: 'Мы создаём не просто стеклянные решения, а пространство, где каждая деталь отражает гармонию и прозрачность современных идей.',
    },
  ];
}
