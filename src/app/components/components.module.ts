import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
import { LkdSpinComponent } from './lkd-spin/lkd-spin.component';
import { LkdStoryComponent } from './lkd-story/lkd-story.component';
import { LkdNavbtnComponent } from './lkd-navbtn/lkd-navbtn.component';
import { LkdPopupComponent } from './lkd-popup/lkd-popup.component';

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
    LkdSpinComponent,
    LkdStoryComponent,
    LkdNavbtnComponent,
    LkdPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
    LkdSpinComponent,
    LkdStoryComponent,
    LkdNavbtnComponent,
    LkdPopupComponent
  ]
})
export class ComponentsModule { }
