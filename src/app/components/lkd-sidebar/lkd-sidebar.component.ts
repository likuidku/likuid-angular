import { Component, OnInit, Input } from '@angular/core';
import { Sidebar } from '../../models/lkd-interfaces';

@Component({
  selector: 'lkd-sidebar',
  templateUrl: './lkd-sidebar.component.html',
})
export class LkdSidebarComponent implements OnInit {

  // --- DATA INPUT ----------------------------------

  @Input() config: Sidebar;

  constructor() { }

  ngOnInit() {
  }

}
