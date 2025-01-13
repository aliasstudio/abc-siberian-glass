import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-good-block',
  imports: [],
  templateUrl: './good-block.component.html',
  styleUrl: './good-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodBlockComponent {}
