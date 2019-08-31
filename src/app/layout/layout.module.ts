import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { LkdCatcheyeComponent } from './lkd-catcheye/lkd-catcheye.component';
import { LkdBlockComponent } from './lkd-block/lkd-block.component';
import { LkdBlockTriComponent } from './lkd-block-tri/lkd-block-tri.component';
import { LkdBlockTxtComponent } from './lkd-block-txt/lkd-block-txt.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
    LkdCatcheyeComponent,
    LkdBlockComponent,
    LkdBlockTriComponent,
    LkdBlockTxtComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    RouterModule
  ],
  exports: [
    LkdCatcheyeComponent,
    LkdBlockComponent,
    LkdBlockTriComponent,
    LkdBlockTxtComponent
  ]
})
export class LayoutModule { }
