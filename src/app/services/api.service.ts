import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getActiveTask(): Observable<Task[]>{

  }

  getDoneTask(): Observable<Task[]>{

  }
}
