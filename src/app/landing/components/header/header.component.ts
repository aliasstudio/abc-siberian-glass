import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { PHONE, PHONE_DIGITS } from '@app/app.config';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { MenuBtnComponent } from '@app/shared/components/menu-btn/menu-btn.component';
import { getHrefBase, getHrefFragment } from '@app/shared/utils/functions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  imports: [MenuBtnComponent, RouterLink],
})
export class HeaderComponent {
  protected readonly phone = PHONE;
  protected readonly digits = PHONE_DIGITS;

  readonly hasBlur = signal(false);
  readonly skipFirst = signal(false);
  readonly isNarrow = signal(window.innerWidth <= 1024);
  readonly isProductPage = signal(location.pathname.includes('product'));
  readonly isDropdownActive = signal(false);

  readonly menu = linkedSignal(() => {
    const menu = [
      {
        name: 'О нас',
        link: '/#about',
      },
      {
        name: 'Товары',
        link: '/#products',
      },
      {
        name: 'Этапы работы',
        link: '/#steps',
      },
      {
        name: 'Наши работы',
        link: '/#works',
      },
      {
        name: 'Партнеры',
        link: '/#partners',
      },
    ];

    return this.isProductPage()
      ? [
          {
            name: 'Главная',
            link: '/',
          },
          ...menu,
        ]
      : menu;
  });

  protected readonly getHrefFragment = getHrefFragment;
  protected readonly getHrefBase = getHrefBase;
  constructor() {
    const router = inject(Router);
    const destroy = inject(DestroyRef);

    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(destroy),
      )
      .subscribe(() => {
        this.isProductPage.set(location.pathname.includes('product'));
        /** Если попадаем на страницу товара скролим всегда вверх, чтобы отобразить карточку */
        this.isProductPage() && window.scrollTo(0, 0);
      });
  }

  @HostListener('window:scroll', ['$event'])
  protected onScroll(): void {
    this.hasBlur.set(window.scrollY >= 150);
    this.skipFirst.set(window.scrollY >= window.innerHeight - 100);
  }

  @HostListener('window:resize', ['$event'])
  protected onResize(): void {
    this.isNarrow.set(window.innerWidth <= 1024);
    this.isDropdownActive.set(false);
  }

  protected onMenuClick(): void {
    document.querySelector('body').classList.toggle('lock');
    this.isDropdownActive.set(!this.isDropdownActive());
  }
}
