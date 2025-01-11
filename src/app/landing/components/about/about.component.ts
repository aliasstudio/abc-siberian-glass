import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextBlockComponent } from '@app/shared/text-block/text-block.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextBlockComponent],
})
export class AboutComponent {}
