import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// --- MODULES ----------------------------------
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { ViewsModule } from './views/views.module';
import { LayoutModule } from '../layout/layout.module';
import { TemplatesModule } from '../templates/templates.module';
// --- PAGES ------------------------------------
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ThemeComponent } from './theme/theme.component';
import { TemplatesComponent } from './templates/templates.component';
import { DocsComponent } from './docs/docs.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    ComponentsComponent,
    ThemeComponent,
    TemplatesComponent,
    DocsComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    ViewsModule,
    TemplatesModule,
    DirectivesModule,
    LayoutModule
  ],
  exports: [
    HomeComponent,
    ComponentsComponent,
    ThemeComponent,
    TemplatesComponent,
    DocsComponent,
    NotFoundComponent,  ]
})
export class PagesModule { }
