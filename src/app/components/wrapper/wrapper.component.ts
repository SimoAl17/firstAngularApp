import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  public drawerOpen = false;

  constructor(public commS: CommService) { }

  ngOnInit(): void {
    this.commS.isDrawerOpen.subscribe(isOpen => {
      this.drawerOpen = isOpen;
    });

  }

}