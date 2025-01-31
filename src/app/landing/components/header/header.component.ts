import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, HostListener, inject } from '@angular/core';
import { PHONE, PHONE_DIGITS } from '@app/app.config';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class HeaderComponent {
  protected readonly phone = PHONE;
  protected readonly digits = PHONE_DIGITS;

  readonly menu = [
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

  protected get isProductPage(): boolean {
    return location.pathname.includes('product');
  }

  protected hasBlur = false;
  protected skipFirst = false;

  constructor() {
    const router = inject(Router);
    const destroy = inject(DestroyRef);
    const changeDetector = inject(ChangeDetectorRef);

    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(destroy),
      )
      .subscribe(event => {
        const menu = this.menu;

        changeDetector.markForCheck();
        menu[0].name === 'Главная' && menu.shift();

        /** Если попадаем на страницу товара скролим всегда вверх, чтобы отобразить карточку */
        if (event.url.includes('/product/')) {
          window.scrollTo(0, 0);
          menu.unshift({
            name: 'Главная',
            link: '/',
          });
        }
      });
  }

  @HostListener('window:scroll', ['$event'])
  protected onScroll(): void {
    this.hasBlur = window.scrollY >= 150;
    this.skipFirst = window.scrollY >= window.innerHeight - 100;
  }
}
