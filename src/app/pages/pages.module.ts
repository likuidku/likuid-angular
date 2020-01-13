import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// --- MODULES ----------------------------------
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { ViewsModule } from './views/views.module';
import { LayoutModule } from '../layout/layout.module';
// --- PAGES ------------------------------------
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ThemeComponent } from './theme/theme.component';
import { DocsComponent } from './docs/docs.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    ComponentsComponent,
    ThemeComponent,
    DocsComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    ViewsModule,
    DirectivesModule,
    LayoutModule
  ],
  exports: [
    HomeComponent,
    ComponentsComponent,
    ThemeComponent,
    DocsComponent,
    NotFoundComponent,  ]
})
export class PagesModule { }
