import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lkd-pill]'
})
export class LkdPillAttrDirective {

  constructor(
    private pill: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.pill.nativeElement, 'lkd-pill');
  }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'lkd-pill'
})
export class LkdPillDirective {

  constructor(
    private pill: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.pill.nativeElement, 'lkd-pill');
  }
}
