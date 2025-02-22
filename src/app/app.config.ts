import type { ApplicationConfig } from '@angular/core';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { routes } from '@app/app.routes';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTitle } from '@app/shared/services/title.service';
import type { NamedIconLink } from '@app/shared/utils/constants';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideLightbox } from '@app/shared/utils/functions';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { tgIcon, vkIcon, whatsappIcon } from '@app/shared/utils/icons';

const APP_TITLE = 'ABC Siberian Glass';

export const EMAIL = 'info@abcsibglass.ru';
export const PHONE = '+7 (961) 208-39-98';
export const PHONE_DIGITS = PHONE.replace(/[^+\d]/g, '');
export const SOCIAL: Array<NamedIconLink> = [
  {
    name: 'tg',
    link: 'https://t.me/abcsibglass',
    icon: tgIcon,
  },
  {
    name: 'vk',
    link: 'https://vk.com/abcsibglass',
    icon: vkIcon,
  },
  {
    name: 'whatsapp',
    link: `https://api.whatsapp.com/send/?phone=${PHONE_DIGITS.substring(1)}&text&type=phone_number`,
    icon: whatsappIcon,
  },
];
export const BACKEND_ROOT = 'https://abcsibglass.ru/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideAnimations(),
    provideRouter(
      routes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
    ),
    provideTitle(APP_TITLE),
    provideEnvironmentNgxMask(),
    provideLightbox({
      panelClass: 'app-lightbox-panel',
      backdropClass: 'app-lightbox-backdrop',
    }),
  ],
};
