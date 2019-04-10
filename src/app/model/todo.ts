export class Todo {
  id: number;
  text: string;
  date: string;
  isDone: boolean

  constructor(id: number, text: string, date: string, isDone: boolean) {
    this.id = id;
    this.text = text;
    this.date = date;
    this.isDone = isDone;
  }
}
