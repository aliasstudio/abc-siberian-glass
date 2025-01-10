import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-goods',
  imports: [],
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsComponent {}
