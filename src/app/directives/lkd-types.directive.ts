import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { FormatterService } from '../services/lkd-formatter.service';

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
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
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
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
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
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
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
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
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
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}
