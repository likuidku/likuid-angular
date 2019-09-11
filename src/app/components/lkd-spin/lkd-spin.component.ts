import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormatterService } from '../../services/lkd-formatter.service';
import { LkdPopupComponent } from '../lkd-popup/lkd-popup.component';

@Component({
  selector: 'lkd-spin',
  templateUrl: './lkd-spin.component.html',
  styleUrls: ['./lkd-spin.component.scss']
})
export class LkdSpinComponent implements OnInit {

  @Input() config: any;

  // ----------------------------------------------
  // --- BACKGROUNDS
  // ----------------------------------------------

  @ViewChild('back', {static: true})      backGradient: ElementRef;
  @ViewChild('image', {static: true})     frontImage: ElementRef;
  @ViewChild('title', {static: true})     titleGradient: ElementRef;

  // ----------------------------------------------
  // --- POPUP
  // ----------------------------------------------

  @ViewChild('popup', {static: true})     popup: LkdPopupComponent;

  constructor(
    public renderer: Renderer2,
    public formatter: FormatterService
  ) { }

  ngOnInit() {
    console.log(this.popup.visible);
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

  public showPopup() {
    this.popup.visible = true;
    console.log('popup');
  }
}
