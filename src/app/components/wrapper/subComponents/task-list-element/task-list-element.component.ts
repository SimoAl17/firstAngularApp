import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-list-element',
  templateUrl: './task-list-element.component.html',
  styleUrls: ['./task-list-element.component.scss'],
})
export class TaskListElementComponent{

  public _task?: Task;

  // @Input() task?: Task;

  @Input() set task(value: Task) {
    if (this._task) {
      this.checkDaysDelta(this._task, value);
    }
    this.checkIfIsRecent(value);
    this._task = value;
  }

  @Output() doneEvent: EventEmitter<Task>;

  constructor() {
    this.doneEvent = new EventEmitter<Task>();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.checkIfIsRecent(changes["task"].currentValue);
    
  // }

  checkIfIsRecent(task: Task){
    const now = new Date();
    const nowTimeStamp = now.getTime();
    const taskDate = task.creationDate;
    const taskDateTimeStamp = taskDate.getTime();
    const deltaTime = nowTimeStamp - taskDateTimeStamp;
    const dayToMilliseconds = 24 * 60 * 60 * 1000;
    if (deltaTime < dayToMilliseconds) {
      console.log("Task recente");
    } else {
      console.log("Task un quarto recente");
    }
  }

  checkDaysDelta(t1: Task, t2: Task){
    const t1Time = t1.creationDate.getTime();
    const t2Time = t2.creationDate.getTime();
    const deltaTime = t1Time - t2Time;
    console.log("Delta minutes:", Math.round(deltaTime/1000/60));
    const date = new Date(2022, 11, 23, 12, 0);
    console.log("date:", date);
    
  }

  taskClicked(event: any){
    if (this._task) {
       this.doneEvent.emit(this._task)
    }
    event.stopPropagation();
  }

}