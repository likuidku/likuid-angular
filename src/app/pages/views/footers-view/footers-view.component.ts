import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lkd-footers-view',
  templateUrl: './footers-view.component.html',
  styleUrls: ['./footers-view.component.scss']
})
export class FootersViewComponent implements OnInit {

  public labelList = 'component';
  public showLabel = 'overview';

  constructor() { }

  ngOnInit() {
  }

}
