import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsComponent } from '../statistics.component';



@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StatisticsComponent
  ]
})
export class StatisticsModule { }
