import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormatterService } from '../../services/lkd-formatter.service';

@Component({
  selector: 'lkd-spin',
  templateUrl: './lkd-spin.component.html',
  styleUrls: ['./lkd-spin.component.scss']
})
export class LkdSpinComponent implements OnInit {

  @Input() config: any;

  @ViewChild('back', {static: true})      backGradient: ElementRef;
  @ViewChild('image', {static: true})     frontImage: ElementRef;
  @ViewChild('gradient', {static: true})  frontGradient: ElementRef;
  @ViewChild('title', {static: true})     titleGradient: ElementRef;

  constructor(
    public renderer: Renderer2,
    public formatter: FormatterService
  ) { }

  ngOnInit() {
    // --- BACK SIDE BACKGROUND GRADIENT --------

    this.renderer.setStyle(
      this.backGradient.nativeElement,
      'background',
      this.formatter.linearGradientBack(this.config.colorA, this.config.colorB)
    );

    // --- TITLE TRANSPARENT BACKGROUND GRADIENT

    this.renderer.setStyle(
      this.titleGradient.nativeElement,
      'background',
      this.formatter.linearGradientBack(
        this.formatter.ttzeColorHEX(this.config.colorB),
        this.formatter.ttzeColorHEX(this.config.colorB)
      )
    );

    // --- HEADER LINEAR GRADIENT & IMAGE -------

    this.renderer.setStyle(
      this.frontImage.nativeElement,
      'background',
      this.formatter.linearGradientBack(
        this.config.colorA,
        this.config.colorB,
        this.config.image
      )
    );
  }
}
