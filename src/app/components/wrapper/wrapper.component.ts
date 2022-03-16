import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(private commS: CommService) { }

  ngOnInit(): void {
    this.commS.isDrawerOpen.subscribe(isOpen => {
      console.log("drawer open", isOpen);
    })
  }

}
