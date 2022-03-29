import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Api2Service } from 'src/app/services/api2.service';


@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  doneList: Task[] = [];

  // eslint-disable-next-line no-unused-vars
  constructor(private api2S: Api2Service) {
  }

  ngOnInit(): void {
    this.api2S.doneTasks$.subscribe(task => this.doneList = task);
  }

  taskDelete(task: Task) {
    // this.api2S.deleteTask(task.id).subscribe(b => {
    //   if(!b){
    //     prompt("errore nel backend");
    //   }
    // })

    this.api2S.removeDoneTask(task);
    this.api2S.deleteTask(task.id).subscribe({
      next: () => {}, 
      error: () => {
        this.api2S.addDoneTask(task);
      }
    });
  }

}