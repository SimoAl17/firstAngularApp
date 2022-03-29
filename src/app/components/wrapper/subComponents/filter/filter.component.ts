import { Component } from '@angular/core';
import { Tag } from 'src/app/model/tags';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent{

  public searchString = "";
  public searchString2 = "";
  public chips: Tag[] = [];
  public selectedTags: Tag[] = [];

  constructor(private api2S: Api2Service) {
    this.chips = api2S.chips;
  }

  findTasks(){
    let tagString;
    if (this.selectedTags.length > 0) {
      tagString = this.selectedTags.map(tag => tag.name);
    }
    this.api2S.getActiveTasks(this.searchString, tagString);
    this.api2S.getDoneTasks(this.searchString, tagString);
  }

  
  selectChip(chip: Tag) {
    if (chip.selected) {
      chip.selected = false;
      const indexToRemove = this.selectedTags.indexOf(chip);
      if (indexToRemove !== -1) {
        this.selectedTags.splice(indexToRemove, 1);
      }} else {
        chip.selected = true;
        this.selectedTags.push(chip);
      }
      this.findTasks();
  }


}
