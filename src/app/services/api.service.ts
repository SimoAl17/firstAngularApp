import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly apiUrl = 'https://6229de55be12fc4538aa6c8e.mockapi.io/task/';

  constructor(private http: HttpClient) {}

  getActiveTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      map((task) => task.filter((task) => !task.doneDate)),
      map((task) => task.map((task) => this.parseTask(task)))
    );
  }

  getDoneTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      map((task) => task.filter((task) => task.doneDate)),
      map((task) => task.map((task) => this.parseTask(task)))
    );
  }

  parseTask(obj: any): Task {
    const task = new Task(obj.id, obj.name, obj.priority, obj.creationDate);
    if (obj.doneDate) {
      task.doneDate = new Date(obj.doneDate);
    }
    return task
  }
}