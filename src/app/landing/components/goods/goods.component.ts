import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsComponent {}
