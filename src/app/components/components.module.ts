import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// --- LIKUID MODULES --------------------------------
import { DirectivesModule } from '../directives/directives.module';
// --- COMPONENTS ------------------------------------
import { LkdNavbarComponent } from './lkd-navbar/lkd-navbar.component';
import { LkdFooterComponent } from './lkd-footer/lkd-footer.component';
import { LkdButtonComponent } from './lkd-button/lkd-button.component';
import { LkdSidebarComponent } from './lkd-sidebar/lkd-sidebar.component';
import {
  LkdViewerComponent,
  LkdViewDirective
} from './lkd-viewer/lkd-viewer.component';
import {
  LkdAlertComponent,
  LkdAlertTitleDirective,
  LkdAlertMessageDirective,
  LkdAlertLinkDirective
} from './lkd-alert/lkd-alert.component';
import { LkdCardComponent } from './lkd-card/lkd-card.component';
import { LkdTableComponent } from './lkd-table/lkd-table.component';
import { LkdCardSpinComponent } from './lkd-card-spin/lkd-card-spin.component';

@NgModule({
  declarations: [
    LkdNavbarComponent,
    LkdFooterComponent,
    LkdButtonComponent,
    LkdSidebarComponent,
    LkdViewerComponent,
    LkdViewDirective,
    LkdAlertComponent,
    LkdAlertTitleDirective,
    LkdAlertMessageDirective,
    LkdAlertLinkDirective,
    LkdCardComponent,
    LkdTableComponent,
    LkdCardSpinComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
  ],
  exports: [
    LkdNavbarComponent,
    LkdFooterComponent,
    LkdButtonComponent,
    DirectivesModule,
    LkdSidebarComponent,
    LkdViewerComponent,
    LkdViewDirective,
    LkdAlertComponent,
    LkdAlertTitleDirective,
    LkdAlertMessageDirective,
    LkdAlertLinkDirective,
    LkdCardComponent,
  ]
})
export class ComponentsModule { }
