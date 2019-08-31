import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-block',
  templateUrl: './lkd-block.component.html'
})
export class LkdBlockComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
