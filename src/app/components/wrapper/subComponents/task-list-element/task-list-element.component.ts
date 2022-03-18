import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-list-element',
  templateUrl: './task-list-element.component.html',
  styleUrls: ['./task-list-element.component.scss'],
})
export class TaskListElementComponent implements OnInit {
  @Input() task?: Task;

  @Output() doneEvent: EventEmitter<Task>;

  constructor() {
    this.doneEvent = new EventEmitter<Task>();
  }

  ngOnInit(): void {}

  taskClicked(event: any){
    if (this.task) {
       this.doneEvent.emit(this.task)
    }
    event.stopPropagation();
  }

}