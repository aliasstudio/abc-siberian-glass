import { ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import type { Product } from '@app/product/models/product';
import { NgOptimizedImage } from '@angular/common';
import { PRODUCTS } from '@app/product/services/product.resolver';
import { ProductBlockComponent } from '@app/product/components/product-block/product-block.component';
import { formatCurrency } from '@app/shared/utils/functions';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';
import { PHONE, PHONE_DIGITS } from '@app/app.config';
import { SocialButtonsComponent } from '@app/shared/components/social-buttons/social-buttons.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ProductBlockComponent, MainButtonDirective, SocialButtonsComponent],
})
export class ProductCardComponent {
  readonly product = input<Product>();

  protected readonly crossProducts = linkedSignal<Product[]>(() => PRODUCTS.filter(p => p.id !== this.product().id));
  protected readonly getPrice = formatCurrency;

  protected readonly phone = PHONE;
  readonly digits = PHONE_DIGITS;
}
