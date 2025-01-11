import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultationComponent {}
