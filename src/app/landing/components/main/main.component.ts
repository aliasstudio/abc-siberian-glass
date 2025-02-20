import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { LogoComponent } from '@app/shared/components/logo/logo.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent],
  host: { '[style.height]': 'windowHeight() + "px"' },
})
export class MainComponent {
  @HostListener('window:resize', ['$event'])
  onResize = (): void => this.windowHeight.set(window.innerHeight);

  readonly windowHeight = signal<number>(window.innerHeight);
}
