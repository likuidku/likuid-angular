import { Component, OnInit, Input } from '@angular/core';
import { NavBar } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-navbar',
  templateUrl: './lkd-navbar.component.html'
})
export class LkdNavbarComponent implements OnInit {

  // --- INPUT DATA ----------------------------------
  @Input() config: NavBar;

  constructor() { }

  ngOnInit() {
  }

}
