import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lkd-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.scss']
})
export class TabsViewComponent implements OnInit {

  public labelList = 'component';
  public showLabel = 'overview';

  constructor() { }

  ngOnInit() {
  }

}
