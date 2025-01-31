import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface NamedLink {
  name: string;
  link: string;
}

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
