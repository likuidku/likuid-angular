import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateVoyagerComponent } from './template-voyager/template-voyager.component';
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    TemplateVoyagerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    LayoutModule
  ],
  exports: [
    TemplateVoyagerComponent
  ]
})
export class TemplatesModule { }
