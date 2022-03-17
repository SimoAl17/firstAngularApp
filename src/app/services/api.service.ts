import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, first, map, Observable, of } from 'rxjs';
import { Task } from "../model/task";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'https://6229de55be12fc4538aa6c8e.mockapi.io/task';

  public allTasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {
    this.getAllTasks();
  }

  getAllTasks():void{
    this.http.get<any[]>(this.API_URL).pipe(
      map(taskObjArray => taskObjArray.map(obj => this.parseTask(obj)))
    ).subscribe(task => this.allTasks$.next(task))
  }

  getActiveTasks(): Observable<Task[]>{
    return this.allTasks$.pipe(
      map(allTask => allTask.filter(t => !t.doneDate))
    );
  }

  getDoneTasks(): Observable<Task[]>{
    return this.allTasks$.pipe(
      map(allTask => allTask.filter(t => t.doneDate))
    );
  }

  getSingleTask(taskId:string): Observable<Task | undefined>{
    // return this.http.get<any>(this.API_URL + "/" + taskId).pipe(
    //   map(taskObj => this.parseTask(taskObj))
    // );
    return this.allTasks$.pipe(
       map(taskArray => taskArray.find(t => t.id === taskId))
    )
  }


  createTask(task: Task): Observable<boolean>{
    const httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}
    return this.http.post<Task>(this.API_URL, task, httpOptions).pipe(
      map(task => {
        this.getAllTasks();
        return true;
      }),
      catchError(error => of(false))
    )
  }

  deleteTask(taskId: string): Observable<boolean>{
    const httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}
    return this.http.delete<any>(this.API_URL + "/" + taskId, httpOptions).pipe(
      map(response => {
        this.getAllTasks();
        return true;
      }),
      catchError(error => of(false))
    )
  }


  taskDone(task: Task): Observable<boolean>{
    const httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}
    task.doneDate = new Date();
    return this.http.put<Task>(this.API_URL + "/" + task.id, httpOptions).pipe(
      map(task => {
        this.getAllTasks();
        return true;
      }),
      catchError(error => of(false))
    )
  }

  // getActiveTask(): Observable<Task[]>{
  //   return this.http.get<any[]>(this.API_URL).pipe(
  //     map(elements => elements.filter(el => !el.doneDate)),
  //     // map(elements => elements.map(el => this.parseTask(el)))
  //     map(elements => elements.map(el => Task.createFromJsonObj(el)))
  //   );
  // }

  // getDoneTask(): Observable<Task[]>{
  //   return this.http.get<any[]>(this.API_URL).pipe(
  //     map(elements => elements.filter(el => el.doneDate)),
  //     map(elements => elements.map(el => this.parseTask(el)))
  //   );
  // }

  parseTask(obj: any): Task {
    const task = new Task(obj.id, obj.name, obj.priority, obj.creationDate);
    if (obj.doneDate) {
      task.doneDate = new Date(obj.doneDate);
    }
    return task;
  }

}