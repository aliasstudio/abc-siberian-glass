import type { ElementRef, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, viewChild } from '@angular/core';
import type { SwiperContainer } from 'swiper/element/bundle';
// @ts-ignore has exported
import type { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PartnersComponent implements OnInit {
  swiper = viewChild<ElementRef<SwiperContainer>>('swiperContainer');

  slides = [
    {
      id: 1,
      title: 'World Class',
      image: 'assets/images/world-class.png',
    },
    {
      id: 2,
      title: 'СИБУР',
      image: 'assets/images/sibur.png',
    },
    {
      id: 3,
      title: 'Брусника',
      image: 'assets/images/brusnika.png',
    },
    {
      id: 4,
      title: 'Брусника',
      image: 'assets/images/brusnika.png',
    },
  ];

  ngOnInit(): void {
    const config: SwiperOptions = {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 20,
      grabCursor: true,
      speed: 800,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      loop: true,
    };

    Object.assign(this.swiper().nativeElement, config);
  }
}
