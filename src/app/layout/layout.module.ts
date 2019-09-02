import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { LkdCatcheyeComponent } from './lkd-catcheye/lkd-catcheye.component';
import { LkdBlockComponent } from './lkd-block/lkd-block.component';
import { LkdBlockTrimageComponent } from './lkd-block-trimage/lkd-block-trimage.component';
import { LkdBlockTextComponent } from './lkd-block-text/lkd-block-text.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../directives/directives.module';
import { LkdBlockCardComponent } from './lkd-block-card/lkd-block-card.component';



@NgModule({
  declarations: [
    LkdCatcheyeComponent,
    LkdBlockComponent,
    LkdBlockTrimageComponent,
    LkdBlockTextComponent,
    LkdBlockCardComponent
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
    LkdBlockTrimageComponent,
    LkdBlockTextComponent,
    LkdBlockCardComponent
  ]
})
export class LayoutModule { }
