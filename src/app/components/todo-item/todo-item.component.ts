import { Component, OnInit, Input, Inject } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from './../../services/todo.service';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;
  private todoList: Todo[] = [];

  constructor(private todoService: TodoService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  getAllTodos(): void {
    this.todoList = this.todoService.getTodos();
  }

  private deleteTodo(): void {
    this.todoService.deleteTodo(this.todo.id);
  }

  private duplicateTodo(todo: Todo): void {
    this.todoService.duplicateTodo(todo);
  }

  private checkboxClicked(todo: Todo): void {
    todo.isDone = !todo.isDone;

    this.todoService.reorderTodosByStatus(todo);
    console.log('checkboxClicked: ', todo);
  }

  private editTodo(data): void {
    this.todoService.editTodo(data);
  }

  private editTodoDialog(todo: Todo): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = todo;

    console.log('1: ', todo);
    const dialogRef = this.dialog.open(TodoDialogComponent, dialogConfig);

    // after dialog is close update the service with the new data
    dialogRef.afterClosed().subscribe(data => {
      console.log('1: ', todo);
      if (data) {
        this.editTodo(data);
      }
    });
  }

}
