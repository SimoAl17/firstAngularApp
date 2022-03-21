import { Component, OnInit } from '@angular/core';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent{

  public searchString = "";

  constructor(private api2S: Api2Service) { }

  findTasks(){
   this.api2S.getActiveTasks(this.searchString);
   this.api2S.getDoneTasks(this.searchString);
  }

}
