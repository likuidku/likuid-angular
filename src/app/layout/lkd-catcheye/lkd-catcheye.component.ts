import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Catcheye } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-catcheye',
  templateUrl: './lkd-catcheye.component.html',
  styleUrls: ['./lkd-catcheye.component.scss']
})
export class LkdCatcheyeComponent implements OnInit {

  @Input() data: Catcheye;

  constructor() { }

  ngOnInit() {
  }

}
