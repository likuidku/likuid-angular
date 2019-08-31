import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LkdBlockComponent } from './lkd-block/lkd-block.component';
import { LkdCatcheyeComponent } from './lkd-catcheye/lkd-catcheye.component';



@NgModule({
  declarations: [
    LkdBlockComponent,
    LkdCatcheyeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LkdBlockComponent,
    LkdCatcheyeComponent
  ]
})
export class LayoutModule { }
