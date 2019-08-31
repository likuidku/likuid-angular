import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lkd-menus-view',
  templateUrl: './menus-view.component.html',
  styleUrls: ['./menus-view.component.scss']
})
export class MenusViewComponent implements OnInit {

  public labelList = 'component';
  public showLabel = 'overview';

  constructor() { }

  ngOnInit() {
  }

}
