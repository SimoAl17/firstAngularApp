export class Task {
  id: string;
  name: string;
  comment?: string;

  tag?: string[];

  creationDate: Date;
  doneDate?: Date;
  dueDate?: Date;

  priority: number;
  repeat?: number;

  constructor(id: string, name: string, priority: number = 0, creationDate?: number) {
    this.name = name;
    this.priority = Task.getFirstNumber(priority);
    if (creationDate) {
      this.creationDate = new Date(creationDate);
    } else {
      this.creationDate = new Date();
    }
    this.id = id;
  }

  toDatabaseModel() {
    const dbObject: any = {id: this.id, name: this.name, creationDate: this.creationDate.getTime()}
    if (this.doneDate) {
      dbObject.doneDate = this.doneDate.getTime();
    } else {
      dbObject.doneDate = null;
    }
    return dbObject;
  }

  static getFirstNumber(fullNumber: number): number{
    return parseInt(fullNumber.toString().slice(-1));
  }

  static createFromJsonObj(obj: any){
    const task = new Task(obj.id, obj.name, obj.priority, obj.creationDate);
    if (obj.doneDate) {
      task.doneDate = new Date(obj.doneDate);
    } else {
      task.doneDate = undefined;
    }
    return task;
  }

  // static generateRandom(): number{
  //   return Math.floor(Math.random() * 1000000);
  // }

}