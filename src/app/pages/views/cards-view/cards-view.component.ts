import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lkd-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})
export class CardsViewComponent implements OnInit {

  public labelList = 'component';
  public showLabel = 'overview';

  constructor() { }

  ngOnInit() {
  }

}
