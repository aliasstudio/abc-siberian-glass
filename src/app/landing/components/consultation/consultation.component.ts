import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainButtonDirective],
})
export class ConsultationComponent {}
