import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { blockTri, catcheyeHeader, blockCards, spins, titles, buttons, storyCards, videoBg } from '../../data/voyager.data';

@Component({
  selector: 'lkd-template-voyager',
  templateUrl: './template-voyager.component.html',
  styleUrls: ['./template-voyager.component.scss']
})
export class TemplateVoyagerComponent implements OnInit {

  // ----------------------------------------------
  // --- DATA BINDING
  // ----------------------------------------------

  titles         = titles;
  buttons        = buttons;
  catcheyeHeader = catcheyeHeader;
  blockTri       = blockTri;
  blockCards     = blockCards;
  spins          = spins;
  storyCards     = storyCards;
  videoBg        = videoBg;

  // ----------------------------------------------
  // --- PROPERTIES
  // ----------------------------------------------

  @ViewChild('headerBack', {static: true}) headerBack: ElementRef;
  @ViewChild('blockCrdBack', {static: true}) blockCrdBack: ElementRef;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.headerBack.nativeElement, 'background-image', this.catcheyeHeader.back);
    this.renderer.setStyle(this.blockCrdBack.nativeElement, 'background', this.blockCards.back);
    console.log(this.videoBg);
  }
}
