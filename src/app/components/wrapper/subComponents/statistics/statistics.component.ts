import { Component, OnInit } from '@angular/core';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  public activeCount = 0;
  public doneCount = 0;

  public lastActiveDate?: Date;
  public lastDoneDate?: Date;

  // eslint-disable-next-line no-unused-vars
  constructor(private api2S: Api2Service) { }

  ngOnInit(): void {
    this.api2S.activeTasks$.subscribe(tasks =>{ 
      const creationDates = tasks.map(t => t.creationDate);
      if (creationDates.length > 0) {
        this.lastActiveDate = this.findMostRecentDate(creationDates);
      }
      this.activeCount = tasks.length;
    });
    this.api2S.doneTasks$.subscribe(tasks => {
      const doneDates = tasks.map(t => t.doneDate).filter(d => d !== null && d !== undefined) as Date[];
      if (doneDates.length > 0) {
        this.lastDoneDate = this.findMostRecentDate(doneDates);
      }
      this.doneCount = tasks.length;
    });
  }

  findMostRecentDate(dates: Date[]): Date{
    const timeStamps = dates.map(d => d.getTime());
    const mostRecent = Math.max(...timeStamps);
    const recentDate = new Date(mostRecent);
    return recentDate;
  }

}
