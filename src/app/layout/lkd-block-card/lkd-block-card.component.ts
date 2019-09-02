import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-block-card',
  templateUrl: './lkd-block-card.component.html',
  styleUrls: ['./lkd-block-card.component.scss']
})
export class LkdBlockCardComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
