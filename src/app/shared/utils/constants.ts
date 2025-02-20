import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface Description {
  title: string;
  text: string;
}

export interface DescriptionWithIcon extends Description {
  icon: SVGIcon;
}

export interface NamedLink {
  name: string;
  link: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface SVGIcon {
  name: string;
  content: string;
  viewBox: string;
}

export interface NamedIconLink extends NamedLink {
  icon: SVGIcon;
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
