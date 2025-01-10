import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '@app/landing/components/about/about.component';
import { PartnersComponent } from '@app/landing/components/partners/partners.component';
import { ConsultationComponent } from '@app/landing/components/consultation/consultation.component';
import { GoodsComponent } from '@app/landing/components/goods/goods.component';
import { WorksComponent } from '@app/landing/components/works/works.component';
import { StepsComponent } from '@app/landing/components/steps/steps.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AboutComponent, PartnersComponent, ConsultationComponent, GoodsComponent, WorksComponent, StepsComponent],
})
export default class MainPageComponent {}
