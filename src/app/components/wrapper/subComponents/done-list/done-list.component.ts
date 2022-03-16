import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss'],
})
export class DoneListComponent implements OnInit {
  doneList: Task[] = [];

  constructor(private taskService: ApiService) {}

  ngOnInit(): void {
    this.taskService
      .getDoneTask()
      .subscribe((doneList) => (this.doneList = doneList));
  }
}
