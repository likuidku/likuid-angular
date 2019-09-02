import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-card',
  templateUrl: './lkd-card.component.html',
  styleUrls: ['./lkd-card.component.scss']
})
export class LkdCardComponent implements OnInit {

  @Input() data: Card;

  constructor() { }

  ngOnInit() {
  }

}
