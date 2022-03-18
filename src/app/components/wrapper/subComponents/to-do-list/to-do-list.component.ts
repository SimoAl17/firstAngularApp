import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private api2S: Api2Service) {
  }

  ngOnInit(): void {
    // this.apiS.getActiveTask().subscribe(this.filterAndParseTask);
    this.api2S.activeTasks$.subscribe(task => this.taskList = task);
  }

  // filterAndParseTask(elements: any[]):void{
  //   for (const el of elements) {
  //     if (!el.doneDate) {
  //       const task = new Task(el.id, el.name, el.priority, el.creationDate);
  //       this.taskList.push(task);
  //     }
  //   }
  // }

  
  taskDone(task: Task) {
    // this.api2S.completeTask(task).subscribe(b => {
    //   if (!b) {
    //     prompt("Errore nel backend")
    //   }
    // });
    this.api2S.removeActiveTask(task);
    this.api2S.addDoneTask(task);
    this.api2S.completeTask(task).subscribe({
      next: task => {}, 
      error: err => {
        this.api2S.addActiveTask(task);
        this.api2S.removeDoneTask(task);
      }
    });
  }
}