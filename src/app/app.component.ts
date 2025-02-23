import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/landing/components/header/header.component';
import { FooterComponent } from '@app/landing/components/footer/footer.component';
import { filter } from 'rxjs';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const fragment = this.activatedRoute.firstChild?.snapshot.fragment;

      /** Если попадаем на страницу товара скролим всегда вверх, чтобы отобразить карточку */
      location.pathname.includes('product') && window.scrollTo(0, 0);

      fragment &&
        setTimeout(() => {
          this.scrollToElement(fragment);
          fragment === 'main' &&
            void this.router.navigate([], {
              replaceUrl: true,
              fragment: null,
            });
        }, 0);
    });
  }

  private scrollToElement(fragment: string): void {
    const offset = 100;
    const element = document.getElementById(fragment);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
