import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lkd-navbtn',
  templateUrl: './lkd-navbtn.component.html',
  styleUrls: ['./lkd-navbtn.component.scss']
})
export class LkdNavbtnComponent implements OnInit {

  @Input() config: any;

  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

}
