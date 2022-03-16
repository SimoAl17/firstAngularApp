import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task-list-element',
  templateUrl: './task-list-element.component.html',
  styleUrls: ['./task-list-element.component.scss'],
})
export class TaskListElementComponent implements OnInit {
  @Input() task?: Task;

  @Output() doneEvent: EventEmitter<string>;

  constructor() {
    this.doneEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  taskDone(){
    if (this.task) {
       this.doneEvent.emit(this.task.id)
    }
  }

}