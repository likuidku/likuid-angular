import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateVoyagerComponent } from './template-voyager/template-voyager.component';
import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TemplateVoyagerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    SharedModule
  ],
  exports: [
    TemplateVoyagerComponent
  ]
})
export class TemplatesModule { }
