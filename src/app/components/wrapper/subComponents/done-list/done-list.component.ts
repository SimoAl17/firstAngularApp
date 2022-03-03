import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

    doneList: Task[];

  constructor() {
    let task1 = new Task("Studia Angular", 10);
    let task2 = new Task("Studia Angular", 10);
    let task3 = new Task("Studia Angular", 10);
    this.doneList = [task1, task2, task3];
  }

  ngOnInit(): void {
  }

}
