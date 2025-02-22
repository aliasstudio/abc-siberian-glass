import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { NamedLink } from '@app/shared/utils/constants';
import { EMAIL, PHONE, PHONE_DIGITS } from '@app/app.config';
import { RouterLink } from '@angular/router';
import { SocialButtonsComponent } from '@app/shared/components/social-buttons/social-buttons.component';
import { SvgIconComponent } from '@app/shared/components/app-svg-icon/svg-icon.component';
import { emailIcon, phoneIcon } from '@app/shared/utils/icons';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { getHrefBase, getHrefFragment } from '@app/shared/utils/functions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, SocialButtonsComponent, SvgIconComponent, LogoComponent],
})
export class FooterComponent {
  readonly email = EMAIL;
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
  protected readonly phoneIcon = phoneIcon;
  protected readonly emailIcon = emailIcon;

  protected readonly getHrefBase = getHrefBase;
  protected readonly getHrefFragment = getHrefFragment;
}
