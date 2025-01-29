import type { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, type ElementRef, viewChild } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';
// @ts-ignore swiper
import type { SwiperOptions } from 'swiper';
import type { SwiperContainer } from 'swiper/element';
import { PRODUCTS } from '@app/product/services/product.resolver';
import { ProductBlockComponent } from '@app/product/components/product-block/product-block.component';

/**
 * TODO: extends SwiperComponent.resolveSwiperConfig()
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainButtonDirective, ProductBlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsComponent implements AfterViewInit {
  protected readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiperContainer');
  protected readonly products = PRODUCTS;

  ngAfterViewInit(): void {
    const config: SwiperOptions = {
      slidesPerView: 4,
      spaceBetween: 20,
      grabCursor: true,
      speed: 800,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      autoHeight: true,
      navigation: {
        prevEl: '.products_slider .slider-navigation__prev',
        nextEl: '.products_slider .slider-navigation__next',
      },
    };
    const swiper = this.swiper().nativeElement;

    Object.assign(swiper, config);
    swiper.initialize();
  }
}
