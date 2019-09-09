import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-popup',
  templateUrl: './lkd-popup.component.html',
  styleUrls: ['./lkd-popup.component.scss']
})
export class LkdPopupComponent implements OnInit {

  @Input() config: any;

  constructor() { }

  ngOnInit() {
  }

}
