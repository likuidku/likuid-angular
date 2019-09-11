import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-popup',
  templateUrl: './lkd-popup.component.html',
  styleUrls: ['./lkd-popup.component.scss']
})
export class LkdPopupComponent implements OnInit {

  @Input() config: any;
  public visible = false;

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.visible = false;
  }

  openPopup() {
    this.visible = true;
  }

}
