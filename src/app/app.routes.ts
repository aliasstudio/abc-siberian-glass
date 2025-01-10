import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    loadComponent: () => import('@app/landing/pages/main-page/main-page.component'),
  },
];
