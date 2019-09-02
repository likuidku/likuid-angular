import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-block-crd',
  templateUrl: './lkd-block-crd.component.html',
  styleUrls: ['./lkd-block-crd.component.scss']
})
export class LkdBlockCrdComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
