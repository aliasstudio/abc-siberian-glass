import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const PHONE = '+7 (993) 935-24-67';
export const PHONE_DIGITS = PHONE.replace(/[^+\d]/g, '');

export const APP_NAME = new InjectionToken<string>('APP_NAME', {
  providedIn: 'root',
  factory: () => {
    const currentTitle = inject(DOCUMENT)?.title;

    if (currentTitle == null) {
      throw new ReferenceError('Document is not available');
    }

    return currentTitle;
  },
});
