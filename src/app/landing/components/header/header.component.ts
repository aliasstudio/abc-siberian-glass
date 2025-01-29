import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { PHONE, PHONE_DIGITS } from '@app/shared/utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly phone = PHONE;
  readonly digits = PHONE_DIGITS;

  hasBlur = false;
  skipFirst = false;

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
      name: 'Этапы работы',
      link: '#steps',
    },
    {
      name: 'Наши работы',
      link: '#works',
    },
    {
      name: 'Партнеры',
      link: '#partners',
    },
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.hasBlur = window.scrollY >= 150;
    this.skipFirst = window.scrollY >= window.innerHeight - 100;
  }
}
