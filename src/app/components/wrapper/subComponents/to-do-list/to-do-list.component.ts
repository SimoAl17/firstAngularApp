import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  taskList: Task[] = []; //type name + [] to make array with type

  constructor(private taskService: ApiService) {}

  ngOnInit(): void {
    this.taskService
      .getActiveTask()
      .subscribe((taskList) => (this.taskList = taskList));
  }

  taskDeleted(id: string) {
    let tempArray = [];
    for (const task of this.taskList) {
      if (task.id !== id) {
        tempArray.push(task);
      }
    }
    this.taskList = tempArray;
  }
}