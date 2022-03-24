import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoneListModule } from '../subComponents/done-list/module/done-list.module';
import { ToDoListModule } from '../subComponents/to-do-list/module/to-do-list.module';
import { TaskInputModule } from '../subComponents/task-input/module/task-input.module';
import { FilterModule } from '../subComponents/filter/module/filter.module';
import { StatisticsModule } from '../subComponents/statistics/module/statistics.module';
import { WrapperComponent } from '../wrapper.component';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoneListModule,
    ToDoListModule,
    TaskInputModule,
    FilterModule,
    StatisticsModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
