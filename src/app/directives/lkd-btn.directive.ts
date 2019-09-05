import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormatterService } from '../services/lkd-formatter.service';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[lkd-btn]',
})
export class LkdBtnDirective implements OnInit {

  // --- DATA INPUT ----------------------------------

  @Input('lkd-btn') format: string[];

  // --- CLASS TO ADD --------------------------------

  private btnClass: string;

  constructor(
    private button: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {}

  ngOnInit() {
    this.btnClass = this.formatter.generatorClassLKD('btn', this.format);
    this.renderer.addClass(this.button.nativeElement, this.btnClass);
  }
}
