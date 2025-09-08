import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '@app/landing/components/about/about.component';
import { PartnersComponent } from '@app/landing/components/partners/partners.component';
import { ProductsComponent } from '@app/landing/components/products/products.component';
import { WorksComponent } from '@app/landing/components/works/works.component';
import { StepsComponent } from '@app/landing/components/steps/steps.component';
import { MainComponent } from '@app/landing/components/main/main.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainComponent, AboutComponent, ProductsComponent, StepsComponent, WorksComponent, PartnersComponent],
})
export default class MainPageComponent {}
