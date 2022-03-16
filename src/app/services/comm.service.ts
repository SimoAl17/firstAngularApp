import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  public isDrawerOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isDrawerOpen = new BehaviorSubject<boolean>(false);
  }
}
