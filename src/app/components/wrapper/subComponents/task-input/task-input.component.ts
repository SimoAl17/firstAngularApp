import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';
import { Api2Service } from 'src/app/services/api2.service';


@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  public taskModel = {name: "", priority: 0}

  constructor(private api2S: Api2Service) { }

  ngOnInit(): void {
  }

  saveTask() {
    const newTask = new Task('', this.taskModel.name, this.taskModel.priority);
    this.api2S.createTask(newTask).subscribe({
      next: task => {this.api2S.addActiveTask(task);}, 
      error: err => {
        
        prompt("error");
      }
    })
  }

}
