import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lkd-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  public show = 'traveler';

  constructor() { }

  ngOnInit() {
  }

  showTemplate(template: string) {
    this.show = template;
  }

}
