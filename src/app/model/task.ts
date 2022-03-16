export class Task {
  id: string;
  name: string;
  comment?: string;

  tag?: string[];

  creationDate: Date;
  doneDate?: Date; //? sets it as optional
  dueDate?: Date;

  priority: number;
  repeat?: number;

  constructor(
    id: string,
    name: string,
    priority: number = 0,
    creationDate?: number
  ) {
    this.name = name;
    this.priority = Task.getFirstNumber(priority);
    if (creationDate) {
      this.creationDate = new Date(creationDate);
    } else {
      this.creationDate = new Date();
    }

    this.id = id;
  }

  static getFirstNumber(fullNumber: number): number {
    const firstDigitStr = String(fullNumber)[0];
    return Number(firstDigitStr);
  }

  // static generateRandom(): number {
  //   return Math.floor(Math.random() * 1000000);
  // }
}