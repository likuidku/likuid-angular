import { Component, OnInit, Input } from '@angular/core';
import { BlockText } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-block-text',
  templateUrl: './lkd-block-text.component.html',
  styleUrls: ['./lkd-block-text.component.scss']
})
export class LkdBlockTextComponent implements OnInit {

  @Input() data: BlockText;

  constructor() { }

  ngOnInit() {
  }

}
