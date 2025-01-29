import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Product } from '@app/product/models/product';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrl: './product-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage],
})
export class ProductBlockComponent {
  readonly product = input.required<Product>();
}
