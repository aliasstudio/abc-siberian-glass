import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class HeaderComponent {
  hasBlur = false;
  skipFirst = false;

  menu = [
    {
      name: 'О нас',
      link: '#about',
    },
    {
      name: 'Товары',
      link: '#goods',
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

  phone = '+7 (993) 935-24-67';
  digits = this.phone.replace(/[^+\d]/g, '');

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.hasBlur = window.scrollY >= 150;
    this.skipFirst = window.scrollY >= window.innerHeight - 100;
  }
}
