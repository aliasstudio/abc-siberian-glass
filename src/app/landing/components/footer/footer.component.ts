import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import type { NamedLink } from '@app/shared/utils/constants';
import { PHONE, PHONE_DIGITS } from '@app/app.config';
import { RouterLink } from '@angular/router';
import { SocialButtonsComponent } from '@app/shared/components/social-buttons/social-buttons.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink, SocialButtonsComponent],
})
export class FooterComponent {
  readonly phone = PHONE;
  readonly digits = PHONE_DIGITS;

  readonly menu: Array<NamedLink> = [
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
}
