import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductCardComponent } from '@app/landing/components/product-card/product-card.component';
import type { Product } from '@app/product/models/product';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCardComponent, MainButtonDirective],
})
export default class ProductPageComponent {
  product = input<Product>();
}
