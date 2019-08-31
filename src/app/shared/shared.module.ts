import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LkdCatcheyeComponent } from './lkd-catcheye/lkd-catcheye.component';



@NgModule({
  declarations: [
    LkdCatcheyeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LkdCatcheyeComponent
  ]
})
export class SharedModule { }
