import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateVoyagerComponent } from './template-voyager/template-voyager.component';
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { LayoutModule } from '../layout/layout.module';
import { TemplateTravelerComponent } from './template-traveler/template-traveler.component';



@NgModule({
  declarations: [
    TemplateVoyagerComponent,
    TemplateTravelerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    LayoutModule
  ],
  exports: [
    TemplateVoyagerComponent,
    TemplateTravelerComponent
  ]
})
export class TemplatesModule { }
