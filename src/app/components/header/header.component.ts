import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() public onMenuClicked: EventEmitter<any>;

  constructor(private commS: CommService) {
    // this.onMenuClicked = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  menuClick(): void {
    //  this.onMenuClicked.emit();
    this.commS.isDrawerOpen.next(!this.commS.isDrawerOpen.value);
  }

}
