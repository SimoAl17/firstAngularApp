import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToDoListComponent } from '../to-do-list.component';
import { TaskListElementModule } from '../../task-list-element/module/task-list-element.module';



@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TaskListElementModule
  ],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
