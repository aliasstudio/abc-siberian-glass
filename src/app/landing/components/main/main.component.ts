import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class MainComponent {
  @HostBinding('style.height')
  height = `${window.innerHeight}px`;

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.height = `${window.innerHeight}px`;
  }
}
