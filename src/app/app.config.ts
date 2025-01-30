import type { ApplicationConfig } from '@angular/core';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { routes } from '@app/app.routes';
import { PreloadAllModules, provideRouter, withPreloading, withRouterConfig } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTitle } from '@app/shared/services/title.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(),
    provideRouter(routes, withRouterConfig({ paramsInheritanceStrategy: 'always' }), withPreloading(PreloadAllModules)),
    provideTitle('ABC Siberian Glass'),
  ],
};
