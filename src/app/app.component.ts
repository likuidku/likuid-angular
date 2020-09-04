import { Component } from '@angular/core';
// --- SERVICES ---------------------------------
import { ComponentsDataService } from './services/components-data.service';

@Component({
  selector: 'lkd-root',
  template: `<lkd-navbar [config]="componentsData.navBarMain" *ngIf=navbar></lkd-navbar>
            <router-outlet></router-outlet>
            <lkd-pill *ngIf="!navbar" (click)="toggleMenu()" pry>show menu</lkd-pill>
            <lkd-pill *ngIf="navbar" (click)="toggleMenu()" ext>hide menu</lkd-pill>
            <lkd-footer [config]="componentsData.footerMain"></lkd-footer>`,
  styleUrls: ['./app.components.scss']
})
export class AppComponent {

  public navbar = true;

  constructor( public componentsData: ComponentsDataService ) {}

  toggleMenu() {
    this.navbar = !this.navbar;
  }

}
