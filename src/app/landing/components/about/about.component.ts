import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextBlockComponent } from '@app/shared/components/text-block/text-block.component';
import { PlaceholderComponent } from '@app/shared/components/placeholder/placeholder.component';
import type { DescriptionWithIcon } from '@app/shared/utils/constants';
import { appearanceIcon, expandIcon, ideaIcon } from '@app/shared/utils/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextBlockComponent, PlaceholderComponent],
})
export class AboutComponent {
  blocks: Array<DescriptionWithIcon> = [
    {
      title: 'expand',
      text: 'В ABC Siberian Glass мы видим в стекле возможность расширить границы привычного пространства, добавляя свет и свободу',
      icon: expandIcon,
    },
    {
      title: 'appearance',
      text: 'Наши конструкции меняют восприятие интерьеров, превращая их в живое взаимодействие архитектуры и окружающего мира',
      icon: appearanceIcon,
    },
    {
      title: 'idea',
      text: 'Мы создаём не просто стеклянные решения, а пространство, где каждая деталь отражает гармонию и прозрачность современных идей',
      icon: ideaIcon,
    },
  ];
}
