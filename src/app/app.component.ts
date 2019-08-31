import { Component } from '@angular/core';
// --- SERVICES ---------------------------------
import { ComponentsDataService } from './services/components-data.service';

@Component({
  selector: 'lkd-root',
  template: `<lkd-navbar [config]="componentsData.navBarMain"></lkd-navbar>
            <router-outlet></router-outlet>
            <lkd-footer [config]="componentsData.footerMain"></lkd-footer>`,
})
export class AppComponent {

  constructor( private componentsData: ComponentsDataService ) {}

}
