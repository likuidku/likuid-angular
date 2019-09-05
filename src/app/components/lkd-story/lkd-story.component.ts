import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { StoryCard } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-story',
  templateUrl: './lkd-story.component.html',
  styleUrls: ['./lkd-story.component.scss']
})
export class LkdStoryComponent implements OnInit {

  @Input() config: StoryCard;

  @ViewChild('story', {static: true}) story: ElementRef;
  @ViewChild('content', {static: true}) content: ElementRef;

  constructor(
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    if (this.config && this.config.skew) {
      this.renderer.addClass(this.story.nativeElement, 'skew');
      this.renderer.addClass(this.content.nativeElement, 'skewI');
    }
  }
}
