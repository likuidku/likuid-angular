import { Directive, ElementRef, Renderer2 } from '@angular/core';


// ----------------------------------------------
// --- COLOR TEXT DIRECTIVES
// ----------------------------------------------

@Directive({
  selector: '[txt-pry]'
})
export class LkdTxtPrimaryDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-primary');
  }
}
@Directive({
  selector: '[txt-sry]'
})
export class LkdTxtSecondaryDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-secondary');
  }
}
@Directive({
  selector: '[txt-inf]'
})
export class LkdTxtInfoDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-info');
  }
}
@Directive({
  selector: '[txt-scs]'
})
export class LkdTxtSuccessDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-success');
  }
}

@Directive({
  selector: '[txt-alr]'
})
export class LkdTxtAlertDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-alert');
  }
}

@Directive({
  selector: '[txt-dgr]'
})
export class LkdTxtDangerDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-danger');
  }
}

@Directive({
  selector: '[txt-drk]'
})
export class LkdTxtDarkDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-dark');
  }
}

@Directive({
  selector: '[txt-ext]'
})
export class LkdTxtExtraDirective {

  constructor(
  private element: ElementRef,
  private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-extra');
  }
}

@Directive({
  selector: '[txt-gry]'
})
export class LkdTxtGrayDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-gray');
  }
}

@Directive({
  selector: '[txt-wht]'
})
export class LkdTxtWhiteDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.element.nativeElement, 'txt-white');
  }
}
