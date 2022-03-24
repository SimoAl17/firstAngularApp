import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskInputComponent } from '../task-input.component';



@NgModule({
  declarations: [
    TaskInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskInputComponent
  ]
})
export class TaskInputModule { }
