import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
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
  // tslint:disable-next-line: directive-selector
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
  // tslint:disable-next-line: directive-selector
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
  // tslint:disable-next-line: directive-selector
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
  // tslint:disable-next-line: directive-selector
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
  // tslint:disable-next-line: directive-selector
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
  // tslint:disable-next-line: directive-selector
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
  // tslint:disable-next-line: directive-selector
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
    // tslint:disable-next-line: directive-selector
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
    // tslint:disable-next-line: directive-selector
    selector: '[txt-wht]'
  })
  export class LkdTxtWhiteDirective {

constructor(
    private element: ElementRef,
    private renderer: Renderer2,
) {
    this.renderer.addClass(this.element, 'txt-white');
    }
}


