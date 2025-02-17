import type { LightboxConfig } from 'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import type { StaticProvider } from '@angular/core';

export const scrollToElementById = (id: string): void => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

export const formatCurrency = (price: number): string =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);

export function provideLightbox(value: LightboxConfig): StaticProvider[] {
  return [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: value,
    },
  ];
}
