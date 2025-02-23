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
      link: 'assets/images/partners/rzd.webp',
    },
    {
      title: 'ПЖДТ',
      link: 'assets/images/partners/pzdt.webp',
    },
    {
      title: 'World Class',
      link: 'assets/images/partners/world.webp',
    },
    {
      title: 'Брусника',
      link: 'assets/images/partners/brusnika.webp',
    },
    {
      title: 'АРМАДА',
      link: 'assets/images/partners/armada.webp',
    },
    {
      title: 'Мостострой 11',
      link: 'assets/images/partners/most.webp',
    },
    {
      title: 'Мать и дитя',
      link: 'assets/images/partners/mother.webp',
    },
    {
      title: 'BELAVI',
      link: 'assets/images/partners/bv.webp',
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
      injectStyles: [
        `
            :host .swiper-horizontal {
              @media (max-width: 1240px) {
                overflow: visible;
              }
            }
          `,
      ],
      breakpoints: {
        960: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2,
        },
        520: {
          slidesPerView: 1.5,
        },
        280: {
          slidesPerView: 1,
        },
      },
    };
    const swiper = this.swiper().nativeElement;

    Object.assign(swiper, config);
    swiper.initialize();
  }
}
