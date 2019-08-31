import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// --- MODULES ----------------------------------
import { ComponentsModule } from '../components/components.module';
import { ViewsModule } from './views/views.module';
// --- PAGES ------------------------------------
import { HomeComponent } from './home/home.component';
import { ComponentsComponent } from './components/components.component';
import { ThemeComponent } from './theme/theme.component';
import { TemplatesComponent } from './templates/templates.component';
import { DocsComponent } from './docs/docs.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplatesModule } from '../templates/templates.module';

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
    TemplatesModule
  ],
  exports: [
    HomeComponent,
    ComponentsComponent,
    ThemeComponent,
    TemplatesComponent,
    DocsComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
