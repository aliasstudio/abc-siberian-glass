import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainButtonDirective],
})
export class WorksComponent {}
