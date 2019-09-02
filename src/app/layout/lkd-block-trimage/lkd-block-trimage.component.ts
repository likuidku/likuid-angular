import { Component, Input, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { BlockTrimg } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-block-trimage',
  templateUrl: './lkd-block-trimage.component.html',
  styleUrls: ['./lkd-block-trimage.component.scss']
})
export class LkdBlockTrimageComponent implements OnInit {

  @Input() data: BlockTrimg;
  @ViewChild('button', {static: true}) button: ElementRef;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.button.nativeElement, this.data.button.color);
  }

}
