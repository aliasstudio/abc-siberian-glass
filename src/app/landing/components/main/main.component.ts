import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  host: { '[style.height]': 'windowHeight() + "px"' },
})
export class MainComponent {
  @HostListener('window:resize', ['$event'])
  onResize = (): void => this.windowHeight.set(window.innerHeight);

  readonly windowHeight = signal<number>(window.innerHeight);
}
