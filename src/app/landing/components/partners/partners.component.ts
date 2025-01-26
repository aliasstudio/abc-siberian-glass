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
      title: 'РЖД',
      image: 'assets/images/partners/rzd.svg',
    },
    {
      title: 'СИБУР',
      image: 'assets/images/partners/sibur.png',
    },
    {
      title: 'World Class',
      image: 'assets/images/partners/world.svg',
    },
    {
      title: 'Брусника',
      image: 'assets/images/partners/brusnika.png',
    },
    {
      title: 'АРМАДА',
      image: 'assets/images/partners/armada.svg',
    },
    {
      title: 'Мострострой 11',
      image: 'assets/images/partners/most.png',
    },
    {
      title: 'Мать и дитя',
      image: 'assets/images/partners/mother.png',
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
