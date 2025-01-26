import type { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, type ElementRef, viewChild } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';
import type { SwiperContainer } from 'swiper/element';
// @ts-ignore type
import type { SwiperOptions } from 'swiper';
import { scrollToElementById } from '@app/shared/utils/functions';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainButtonDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorksComponent implements AfterViewInit {
  protected readonly scrollTo = scrollToElementById;

  protected readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiperContainer');

  protected readonly slides = [
    { title: 'shower_0.jpg', link: 'assets/images/works/shower/shower_0.jpg' },
    { title: 'shower_1.jpg', link: 'assets/images/works/shower/shower_1.jpg' },
    { title: 'shower_2.jpg', link: 'assets/images/works/shower/shower_2.jpg' },
    { title: 'shower_3.jpg', link: 'assets/images/works/shower/shower_3.jpg' },
    { title: 'shower_4.jpg', link: 'assets/images/works/shower/shower_4.jpg' },
    { title: 'shower_5.jpg', link: 'assets/images/works/shower/shower_5.jpg' },
    { title: 'shower_6.jpg', link: 'assets/images/works/shower/shower_6.jpg' },
    { title: 'shower_7.jpg', link: 'assets/images/works/shower/shower_7.jpg' },
    { title: 'shower_8.jpg', link: 'assets/images/works/shower/shower_8.jpg' },
    { title: 'shower_9.jpg', link: 'assets/images/works/shower/shower_9.jpg' },
    { title: 'shower_10.jpg', link: 'assets/images/works/shower/shower_10.jpg' },
    { title: 'shower_11.jpg', link: 'assets/images/works/shower/shower_11.jpg' },
    { title: 'shower_12.jpg', link: 'assets/images/works/shower/shower_12.jpg' },
    { title: 'shower_13.jpg', link: 'assets/images/works/shower/shower_13.jpg' },
    { title: 'shower_14.jpg', link: 'assets/images/works/shower/shower_14.jpg' },
    { title: 'shower_15.jpg', link: 'assets/images/works/shower/shower_15.jpg' },
    { title: 'shower_16.jpg', link: 'assets/images/works/shower/shower_16.jpg' },
    { title: 'shower_17.jpg', link: 'assets/images/works/shower/shower_17.jpg' },
    { title: 'shower_18.jpg', link: 'assets/images/works/shower/shower_18.jpg' },
    { title: 'shower_19.jpg', link: 'assets/images/works/shower/shower_19.jpg' },
    { title: 'shower_20.jpg', link: 'assets/images/works/shower/shower_20.jpg' },
    { title: 'shower_21.jpg', link: 'assets/images/works/shower/shower_21.jpg' },

    { title: 'barrier_0.jpg', link: 'assets/images/works/barrier/barrier_0.jpg' },
    { title: 'barrier_1.jpg', link: 'assets/images/works/barrier/barrier_1.jpg' },
    { title: 'barrier_2.jpg', link: 'assets/images/works/barrier/barrier_2.jpg' },
    { title: 'barrier_3.jpg', link: 'assets/images/works/barrier/barrier_3.jpg' },
    { title: 'barrier_4.jpg', link: 'assets/images/works/barrier/barrier_4.jpg' },
    { title: 'barrier_5.jpg', link: 'assets/images/works/barrier/barrier_5.jpg' },
    { title: 'barrier_6.jpg', link: 'assets/images/works/barrier/barrier_6.jpg' },
    { title: 'barrier_7.jpg', link: 'assets/images/works/barrier/barrier_7.jpg' },
    { title: 'barrier_8.jpg', link: 'assets/images/works/barrier/barrier_8.jpg' },
    { title: 'barrier_9.jpg', link: 'assets/images/works/barrier/barrier_9.jpg' },
    { title: 'barrier_10.jpg', link: 'assets/images/works/barrier/barrier_10.jpg' },
    { title: 'barrier_11.jpg', link: 'assets/images/works/barrier/barrier_11.jpg' },
    { title: 'barrier_12.jpg', link: 'assets/images/works/barrier/barrier_12.jpg' },
    { title: 'barrier_13.jpg', link: 'assets/images/works/barrier/barrier_13.jpg' },
    { title: 'barrier_14.jpg', link: 'assets/images/works/barrier/barrier_14.jpg' },
    { title: 'barrier_15.jpg', link: 'assets/images/works/barrier/barrier_15.jpg' },
    { title: 'barrier_16.jpg', link: 'assets/images/works/barrier/barrier_16.jpg' },
    { title: 'barrier_17.jpg', link: 'assets/images/works/barrier/barrier_17.jpg' },
    { title: 'barrier_18.jpg', link: 'assets/images/works/barrier/barrier_18.jpg' },
    { title: 'barrier_19.jpg', link: 'assets/images/works/barrier/barrier_19.jpg' },
    { title: 'barrier_20.jpg', link: 'assets/images/works/barrier/barrier_20.jpg' },

    { title: 'aprons_0.jpg', link: 'assets/images/works/aprons/aprons_0.jpg' },
    { title: 'aprons_1.jpg', link: 'assets/images/works/aprons/aprons_1.jpg' },

    { title: 'partitions_0.jpg', link: 'assets/images/works/partitions/partitions_0.jpg' },
    { title: 'partitions_1.jpg', link: 'assets/images/works/partitions/partitions_1.jpg' },
    { title: 'partitions_2.jpg', link: 'assets/images/works/partitions/partitions_2.jpg' },
    { title: 'partitions_3.jpg', link: 'assets/images/works/partitions/partitions_3.jpg' },
    { title: 'partitions_4.jpg', link: 'assets/images/works/partitions/partitions_4.jpg' },
    { title: 'partitions_5.jpg', link: 'assets/images/works/partitions/partitions_5.jpg' },
    { title: 'partitions_6.jpg', link: 'assets/images/works/partitions/partitions_6.jpg' },
    { title: 'partitions_7.jpg', link: 'assets/images/works/partitions/partitions_7.jpg' },
    { title: 'partitions_8.jpg', link: 'assets/images/works/partitions/partitions_8.jpg' },
    { title: 'partitions_9.jpg', link: 'assets/images/works/partitions/partitions_9.jpg' },
    { title: 'partitions_10.jpg', link: 'assets/images/works/partitions/partitions_10.jpg' },
    { title: 'partitions_11.jpg', link: 'assets/images/works/partitions/partitions_11.jpg' },
    { title: 'partitions_12.jpg', link: 'assets/images/works/partitions/partitions_12.jpg' },

    { title: 'canopy_0.jpg', link: 'assets/images/works/canopy/canopy_0.jpg' },
    { title: 'canopy_1.jpg', link: 'assets/images/works/canopy/canopy_1.jpg' },
    { title: 'canopy_2.jpg', link: 'assets/images/works/canopy/canopy_2.jpg' },
    { title: 'canopy_3.jpg', link: 'assets/images/works/canopy/canopy_3.jpg' },
    { title: 'canopy_4.jpg', link: 'assets/images/works/canopy/canopy_4.jpg' },
    { title: 'canopy_5.jpg', link: 'assets/images/works/canopy/canopy_5.jpg' },
    { title: 'canopy_6.jpg', link: 'assets/images/works/canopy/canopy_6.jpg' },
    { title: 'canopy_7.jpg', link: 'assets/images/works/canopy/canopy_7.jpg' },
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
    };
    const swiper = this.swiper().nativeElement;

    Object.assign(swiper, config);
    swiper.initialize();
  }
}
