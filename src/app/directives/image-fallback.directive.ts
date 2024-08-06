import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]',
  standalone: true,
})
export default class ImageFallbackDirective {
  private readonly el = inject(ElementRef);

  @Input() appImageFallback = '/assets/images/image.png';

  @HostListener('error') _() {
    const element: HTMLImageElement = this.el.nativeElement;
    element.src = this.appImageFallback;
  }
}
