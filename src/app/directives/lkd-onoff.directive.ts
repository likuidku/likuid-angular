import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { FormatterService } from '../services/lkd-formatter.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lkd-on]'
})
export class LkdOnDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, 'lkd-on');
  }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lkd-off]'
})
export class LkdOffDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, 'lkd-off');
  }
}
