import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/model/tags';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';
import { Api2Service } from 'src/app/services/api2.service';



@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnDestroy {

  public taskModel = {name: "", priority: 0, tags: []};
  public subscription?: Subscription;
  public chips: Tag[] = [];


  constructor(private api2S: Api2Service) {
    this.chips = api2S.chips;
  }

  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  selectChip(chip: any) {
    chip.selected = !chip.selected;
  }

  saveTask() {
    let newTask = new Task('', this.taskModel.name, this.taskModel.priority, undefined, this.taskModel.tags);
    newTask.tags = [];
    for (const chip of this.chips) {
      if (chip.selected === true) {
        newTask.tags.push(chip.name);
      }
    }
    this.subscription = this.api2S.createTask(newTask).subscribe({
      next: task => {this.api2S.addActiveTask(task);}, 
      error: err => {
        prompt("error");
      }
    })
  }

}
