import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private apiS: ApiService) {
  }

  ngOnInit(): void {
    // this.apiS.getActiveTask().subscribe(this.filterAndParseTask);
    this.apiS.getActiveTasks().subscribe(task => this.taskList = task);
  }

  // filterAndParseTask(elements: any[]):void{
  //   for (const el of elements) {
  //     if (!el.doneDate) {
  //       const task = new Task(el.id, el.name, el.priority, el.creationDate);
  //       this.taskList.push(task);
  //     }
  //   }
  // }

  taskDeleted(id: string){
    let tempArray = [];
    for (const task of this.taskList) {
      if (task.id !== id) {
        tempArray.push(task);
      }
    }
    this.taskList = tempArray;
  }

}