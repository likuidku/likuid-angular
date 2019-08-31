import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsViewComponent } from './components-view/components-view.component';
import { AlertsViewComponent } from './alerts-view/alerts-view.component';
import { ButtonsViewComponent } from './buttons-view/buttons-view.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { FootersViewComponent } from './footers-view/footers-view.component';
import { MenusViewComponent } from './menus-view/menus-view.component';
import { SidebarViewComponent } from './sidebar-view/sidebar-view.component';
import { TabsViewComponent } from './tabs-view/tabs-view.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ComponentsViewComponent,
    AlertsViewComponent,
    ButtonsViewComponent,
    CardsViewComponent,
    FootersViewComponent,
    MenusViewComponent,
    SidebarViewComponent,
    TabsViewComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ComponentsViewComponent
  ]
})
export class ViewsModule { }
