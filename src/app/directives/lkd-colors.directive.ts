import { Directive, ElementRef, Renderer2 } from '@angular/core';

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
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
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
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.element.nativeElement, this.addClass);
  }
}
