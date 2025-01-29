import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PHONE, PHONE_DIGITS } from '@app/shared/utils/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class FooterComponent {
  readonly phone = PHONE;
  readonly digits = PHONE_DIGITS;

  menu = [
    {
      name: 'О нас',
      link: '#about',
    },
    {
      name: 'Товары',
      link: '#products',
    },
    {
      name: 'Наши работы',
      link: '#works',
    },
  ];

  social = [
    {
      icon: 'tg.svg',
      link: 'tg.com',
    },
    {
      icon: 'vk.svg',
      link: 'vk.com',
    },
    {
      icon: 'whatsapp.svg',
      link: 'whatsapp.com',
    },
  ];
}
