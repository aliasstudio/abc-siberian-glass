import type { LightboxConfig } from 'ng-gallery/lightbox';
import { LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';
import type { StaticProvider } from '@angular/core';

export const scrollToElementById = (id: string): void => {
  const element = document.getElementById(id);

  if (element) {
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const formatCurrency = (price: number): string =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);

/**
 * Возвращает часть URL после символа '#'.
 * Если символ '#' отсутствует, возвращает пустую строку.
 */
export const getHrefFragment = (url: string): string => {
  const hashIndex = url.indexOf('#');

  return hashIndex !== -1 ? url.substring(hashIndex + 1) : '';
};

/**
 * Возвращает часть URL до символа '#'.
 * Если символ '#' отсутствует, возвращает полный URL.
 */
export const getHrefBase = (url: string): string => {
  const hashIndex = url.indexOf('#');

  return hashIndex !== -1 ? url.substring(0, hashIndex) : url;
};

export function provideLightbox(value: LightboxConfig): StaticProvider[] {
  return [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: value,
    },
  ];
}
