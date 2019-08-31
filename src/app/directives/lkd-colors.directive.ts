import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { FormatterService } from '../services/lkd-formatter.service';

// --------------------------------------------------
// --- PRIMARY COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[pry]'
})
export class PrimaryColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'primary';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- SECONDARY COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[sry]'
})
export class SecondaryColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'secondary';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- INFO COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[inf]'
})
export class InfoColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'info';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- SUCCESS COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[scs]'
})
export class SuccessColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'success';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- ALERT COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[alr]'
})
export class AlertColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'alert';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- DANGER COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[dgr]'
})
export class DangerColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'danger';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- EXTRA COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ext]'
})
export class ExtraColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'extra';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- DARK COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[drk]'
})
export class DarkColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'dark';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- GRAY COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[gry]'
})
export class GrayColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'gray';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}

// --------------------------------------------------
// --- WHITE COLOR
// --------------------------------------------------

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[wht]'
})
export class WhiteColorDirective {

  // --- CLASS TO ADD --------------------------------

  private addClass = 'white';


  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass(this.addClass, this.element, this.renderer);
  }
}
