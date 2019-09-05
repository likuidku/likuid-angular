import { Directive, ElementRef, Renderer2 } from '@angular/core';

// --------------------------------------------------
// --- BASIC STYLE
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[basic]'
})
export class BasicTypeDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'basic';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
  }
}

// --------------------------------------------------
// --- FLAT STYLE
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[flat]'
})
export class FlatTypeDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'flat';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
  }
}

// --------------------------------------------------
// --- SOLID STYLE
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[solid]'
})
export class SolidTypeDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'solid';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
  }
}

// --------------------------------------------------
// --- SOLID STYLE
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[filled]'
})
export class FilledTypeDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'filled';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
  }
}

// --------------------------------------------------
// --- LKD STYLE
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lkd]'
})
export class LkdTypeDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'lkd';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
  }
}

// --------------------------------------------------
// --- VYG STYLE
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[vyg]'
})
export class VygTypeDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'vyg';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
  }
}
