import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainButtonDirective],
})
export class GoodsComponent {}
