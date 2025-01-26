import type { AfterViewInit, ElementRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, viewChild } from '@angular/core';
// @ts-ignore swiper
import type { SwiperOptions } from 'swiper';
import type { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PartnersComponent implements AfterViewInit {
  swiper = viewChild<ElementRef<SwiperContainer>>('swiperContainer');

  slides = [
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
      slidesPerView: 3,
      spaceBetween: 20,
      grabCursor: true,
      speed: 800,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        prevEl: '.partners_slider .slider-navigation__prev',
        nextEl: '.partners_slider .slider-navigation__next',
      },
      lazyPreloadPrevNext: 2,
    };
    const swiper = this.swiper().nativeElement;

    Object.assign(swiper, config);
    swiper.initialize();
  }
}
