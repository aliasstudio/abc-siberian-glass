import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import type { SVGIcon } from '@app/shared/utils/constants';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  readonly width = input(24);
  readonly height = input(24);
  readonly icon = input.required<SVGIcon>();

  private sanitizer = inject(DomSanitizer);

  protected getSvgContent(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
