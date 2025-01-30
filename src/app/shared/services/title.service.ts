import type { StaticProvider } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_NAME } from '@app/shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class TitleService extends Title {
  private readonly _appName = inject(APP_NAME);

  getName(): string {
    return this._appName;
  }

  getSeparator(): string {
    return ' — ';
  }

  override setTitle(newTitle: string | undefined): void {
    super.setTitle(this.normalize(newTitle || ''));
  }

  protected normalize(text: string): string {
    const name = this.getName();

    if (text.startsWith(name) !== true) {
      text = name + this.getSeparator() + text;
    }

    return text;
  }
}

export function provideTitle(value: string): StaticProvider[] {
  return [
    {
      provide: Title,
      useExisting: TitleService,
    },
    {
      provide: APP_NAME,
      useValue: value,
    },
  ];
}
