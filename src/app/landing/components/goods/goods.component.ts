import type { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, type ElementRef, viewChild } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';
// @ts-ignore swiper
import type { SwiperOptions } from 'swiper';
import type { SwiperContainer } from 'swiper/element';

/**
 * TODO: extends SwiperComponent.resolveSwiperConfig()
 */
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrl: './goods.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainButtonDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GoodsComponent implements AfterViewInit {
  swiper = viewChild<ElementRef<SwiperContainer>>('swiperContainer');

  goods = [
    {
      title: 'РЖД',
      link: 'assets/images/partners/rzd.svg',
    },
    {
      title: 'СИБУР',
      link: 'assets/images/partners/sibur.png',
    },
    {
      title: 'World Class',
      link: 'assets/images/partners/world.svg',
    },
    {
      title: 'Брусника',
      link: 'assets/images/partners/brusnika.png',
    },
    {
      title: 'АРМАДА',
      link: 'assets/images/partners/armada.svg',
    },
    {
      title: 'Мострострой 11',
      link: 'assets/images/partners/most.png',
    },
    {
      title: 'Мать и дитя',
      link: 'assets/images/partners/mother.png',
    },
  ];

  ngAfterViewInit(): void {
    const config: SwiperOptions = {
      slidesPerView: 4,
      spaceBetween: 20,
      grabCursor: true,
      speed: 800,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
        prevEl: '.goods_slider .slider-navigation__prev',
        nextEl: '.goods_slider .slider-navigation__next',
      },
    };
    const swiper = this.swiper().nativeElement;

    Object.assign(swiper, config);
    swiper.initialize();
  }
}
