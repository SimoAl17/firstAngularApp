import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskListElementComponent } from '../task-list-element.component';



@NgModule({
  declarations: [
    TaskListElementComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskListElementComponent
  ]
})
export class TaskListElementModule { }
