import { Component, Input, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { BlockTri } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-block-tri',
  templateUrl: './lkd-block-tri.component.html',
  styleUrls: ['./lkd-block-tri.component.scss']
})
export class LkdBlockTriComponent implements OnInit {

  @Input() data: BlockTri;
  @ViewChild('button', {static: true}) button: ElementRef;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.button.nativeElement, this.data.button.color);
  }

}
