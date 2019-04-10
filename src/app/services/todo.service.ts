import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  private nextIndex = 0;

  constructor() { }

  /**
   * @return Todo[] array list of all the items
   */
  public getTodos(): Todo[] {
    return this.todos;
  }

  /**
   * Add a new todo item to array and increase the index
   *
   * @param text string  item text
   */
  public addTodo(text: string, date: string): void {
    const todo = new Todo(this.nextIndex, text, date, false);
    this.todos.push(todo);
    this.nextIndex++;

    console.log('todo.service: addTodo() ', this.todos);
  }

  /**
   * Find the item in the todos array
   * Update the value of the item
   *
   * @param id number item id
   * @param text string item new text
   */
  public editTodo(data): void {
    const objIndex = this.todos.findIndex((obj => obj.id === data.id));

    this.todos[objIndex].text = data.text;
    this.todos[objIndex].date = data.date;

    console.log('todo.service: editTodo(): ', this.todos);
  }

  /**
   * Deep copy the object item, set a new id and add to todos array
   *
   * @param todo Todo a copy of todo item
   */
  public duplicateTodo(todo: Todo): void {
    const duplicateItem = { ...todo };
    duplicateItem.id = this.nextIndex;

    this.todos.push(duplicateItem);
    this.nextIndex++;

    console.log('todo.service: duplicateTodo(): ', this.todos);
  }

  /**
   * Delete an item from todos array
   *
   * @param id number the index of the item to be deleted
   */
  public deleteTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);

    console.log('todo.service: deleteTodo(): ', this.todos);
  }

  /**
   * Reorder the items in todos array
   *
   * The items with status done will be displayed last
   */
  public reorderTodosByStatus(item: Todo): void {
    // return the index of the selected item
    const itemIndex = this.todos.indexOf(item);
    // remove item from the list
    this.todos.splice(itemIndex, 1);

    if (item.isDone) { // move to the end of the list
      // add the item to the end of the list
      this.todos.push(item);
    } else { // move to the top of the list
      // add the item to top of the list
      this.todos.unshift(item);
    }

    console.log('todo.service: reorderTodosByStatus(): ', this.todos);
  }
}
