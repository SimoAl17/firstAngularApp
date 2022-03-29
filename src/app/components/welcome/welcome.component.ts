import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {


  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("on Init");
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("on Changes");
    
  // }

  ngOnDestroy(): void {
    console.log("on Destroy");
  }

}
