import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lkd-btn-vyg]'
})
export class LkdBtnVygAttrDirective {

  constructor(
    private btn: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.btn.nativeElement, 'lkd-btn-vyg');
  }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'lkd-btn-vyg'
})
export class LkdBtnVygDirective {

  constructor(
    private btn: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.btn.nativeElement, 'lkd-btn-vyg');
  }
}
