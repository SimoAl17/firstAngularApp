import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoneListComponent } from '../done-list.component';
import { TaskListElementModule } from '../../task-list-element/module/task-list-element.module';



@NgModule({
  declarations: [
    DoneListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskListElementModule
  ],
  exports: [
    DoneListComponent
  ]
})
export class DoneListModule { }
