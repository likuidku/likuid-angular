import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'lkd-spin',
  templateUrl: './lkd-spin.component.html',
  styleUrls: ['./lkd-spin.component.scss']
})
export class LkdSpinComponent implements OnInit {

  @Input() config: any;

  @ViewChild('back', {static: true}) backGradient: ElementRef;
  @ViewChild('image', {static: true}) frontImage: ElementRef;
  @ViewChild('gradient', {static: true}) frontGradient: ElementRef;
  @ViewChild('title', {static: true}) titleGradient: ElementRef;

  public colorAT: string;
  public colorBT: string;

  public background: string;
  public gradient: string;
  public gradientTransparent: string;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.colorAT = this.ttzeColor(this.config.colorA);
    this.colorBT = this.ttzeColor(this.config.colorB);
    this.gradient = `linear-gradient(to right bottom, ${this.config.colorA}, ${this.config.colorB})`;
    this.gradientTransparent = `linear-gradient(to right bottom, ${this.colorAT}, ${this.colorBT})`;
    this.background = `linear-gradient(to right bottom, ${this.config.colorA}, ${this.config.colorB}), ${this.config.image}`;
    this.renderer.setStyle(this.backGradient.nativeElement, 'background', this.gradient);
    this.renderer.setStyle(this.titleGradient.nativeElement, 'background', this.gradientTransparent);
    this.renderer.setStyle(this.frontImage.nativeElement, 'background', this.background);
    this.renderer.setStyle(this.frontImage.nativeElement, 'background-size', 'cover');
    this.renderer.setStyle(this.frontImage.nativeElement, 'background-position', 'center');
  }

  ttzeColor(color: string) {
    const colorT = color + 'bc';
    console.log(colorT);
    return colorT;
  }

}
