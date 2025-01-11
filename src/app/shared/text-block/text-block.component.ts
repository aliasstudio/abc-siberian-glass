import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class TextBlockComponent {
  iconLink = input<string>();
  text = input<string>();
}
