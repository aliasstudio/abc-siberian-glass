import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductCardComponent } from '@app/landing/components/product-card/product-card.component';
import type { Product } from '@app/product/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCardComponent],
})
export default class ProductPageComponent {
  product = input<Product>();
}
