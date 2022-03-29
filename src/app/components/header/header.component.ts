import { Component, OnInit, } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() public onMenuClicked: EventEmitter<any>;

  // eslint-disable-next-line no-unused-vars
  constructor(private commS: CommService) {
    // this.onMenuClicked = new EventEmitter();
  }

  ngOnInit(): void {
    console.log("");
    
  }

  menuClick(): void {
    //  this.onMenuClicked.emit();
    this.commS.isDrawerOpen.next(!this.commS.isDrawerOpen.value);
  }

}
