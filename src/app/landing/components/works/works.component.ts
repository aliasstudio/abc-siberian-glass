import type { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, type ElementRef, viewChild } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';
import type { SwiperContainer } from 'swiper/element';
// @ts-ignore type
import type { SwiperOptions } from 'swiper';
import { scrollToElementById } from '@app/shared/utils/functions';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainButtonDirective, NgOptimizedImage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorksComponent implements AfterViewInit {
  protected readonly scrollTo = scrollToElementById;

  protected readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiperContainer');

  protected readonly slides = [
    { title: '1.webp', link: 'assets/images/works/1.webp' },
    { title: '2.webp', link: 'assets/images/works/2.webp' },
    { title: '3.webp', link: 'assets/images/works/3.webp' },
    { title: '4.webp', link: 'assets/images/works/4.webp' },
    { title: '5.webp', link: 'assets/images/works/5.webp' },
    { title: '6.webp', link: 'assets/images/works/6.webp' },
    { title: '7.webp', link: 'assets/images/works/7.webp' },
    { title: '8.webp', link: 'assets/images/works/8.webp' },
    { title: '9.webp', link: 'assets/images/works/9.webp' },
    { title: '10.webp', link: 'assets/images/works/10.webp' },
    { title: '11.webp', link: 'assets/images/works/11.webp' },
    { title: '12.webp', link: 'assets/images/works/12.webp' },
    { title: '13.webp', link: 'assets/images/works/13.webp' },
    { title: '14.webp', link: 'assets/images/works/14.webp' },
    { title: '15.webp', link: 'assets/images/works/15.webp' },
    { title: '16.webp', link: 'assets/images/works/16.webp' },
    { title: '17.webp', link: 'assets/images/works/17.webp' },
    { title: '18.webp', link: 'assets/images/works/18.webp' },
    { title: '19.webp', link: 'assets/images/works/19.webp' },
    { title: '20.webp', link: 'assets/images/works/20.webp' },
    { title: '21.webp', link: 'assets/images/works/21.webp' },
    { title: '22.webp', link: 'assets/images/works/22.webp' },
    { title: '23.webp', link: 'assets/images/works/23.webp' },
    { title: '24.webp', link: 'assets/images/works/24.webp' },
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
        delay: 3000,
      },
      navigation: {
        prevEl: '.works_slider .slider-navigation__prev',
        nextEl: '.works_slider .slider-navigation__next',
      },
      lazyPreloadPrevNext: 2,
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
