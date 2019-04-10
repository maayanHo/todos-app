import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from '../../model/todo';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoList: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getAllTodos();
  }

  public getAllTodos(): void {
    this.todoList = this.todoService.getTodos();
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }
}
