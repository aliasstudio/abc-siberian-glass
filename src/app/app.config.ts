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
import type { NamedLink } from '@app/shared/utils/constants';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideLightbox } from '@app/shared/utils/functions';
import { provideEnvironmentNgxMask } from 'ngx-mask';

const APP_TITLE = 'ABC Siberian Glass';

export const PHONE = '+7 (993) 935-24-67';
export const PHONE_DIGITS = PHONE.replace(/[^+\d]/g, '');
export const SOCIAL: Array<NamedLink> = [
  {
    name: 'tg.svg',
    link: 'https://t.me/abcsibglass',
  },
  {
    name: 'vk.svg',
    link: 'https://vk.com/abcsibglass',
  },
  {
    name: 'whatsapp.svg',
    link: 'https://api.whatsapp.com/send/?phone=79612083998&text&type=phone_number&app_absent=0',
  },
];
export const BACKEND_ROOT = 'http://localhost:3000/api';

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
