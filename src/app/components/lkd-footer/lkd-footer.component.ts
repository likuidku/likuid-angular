import { Component, OnInit, Input } from '@angular/core';
import { Footer } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-footer',
  templateUrl: './lkd-footer.component.html',
})
export class LkdFooterComponent implements OnInit {

  // --- DATA INPUT ----------------------------------

  @Input() config: Footer;

  constructor() { }

  ngOnInit() {
  }

}
