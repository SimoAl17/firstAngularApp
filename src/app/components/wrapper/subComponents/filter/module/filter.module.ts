import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from '../filter.component';



@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
