import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-step-block',
  templateUrl: './step-block.component.html',
  styleUrl: './step-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.alt-color]': 'altColor()' },
})
export class StepBlockComponent {
  altColor = input(false);

  number = input.required<string, number>({ transform: num => num.toString().padStart(2, '0') });
  title = input.required<string>();
  description = input<string>();
}
