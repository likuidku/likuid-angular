import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'lkd-spin',
  templateUrl: './lkd-spin.component.html',
  styleUrls: ['./lkd-spin.component.scss']
})
export class LkdSpinComponent implements OnInit {

  @Input() config: any;

  @ViewChild('back', {static: true}) spinBack: ElementRef;

  public background: string;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.background = `linear-gradient(to right bottom, ${this.config.colorA}, ${this.config.colorB})`;
    this.renderer.setStyle(this.spinBack.nativeElement, 'background', this.background);
  }

}
