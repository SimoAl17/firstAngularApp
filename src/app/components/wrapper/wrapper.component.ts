import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  public drawerOpen = false;

  // eslint-disable-next-line no-unused-vars
  constructor(public commS: CommService) { }

  ngOnInit(): void {
    this.commS.isDrawerOpen.subscribe(isOpen => {
      this.drawerOpen = isOpen;
    });

  }

}