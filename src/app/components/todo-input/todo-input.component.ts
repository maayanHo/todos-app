import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import {FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Input()
  private todoText: string;
  todoDate: string;
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(private todoService: TodoService, private datePipe: DatePipe) {
    this.todoText = '';
    this.todoDate = this.serializedDate.value;
  }

  ngOnInit() {
  }

  /**
   * Add a new item
   * Clear the search term from the input
   */
  addTodo(): void {
    this.todoService.addTodo(this.todoText, this.todoDate);

    // Reset totoText after submission
    this.todoText = '';
  }

  /**
   * Clear the search term from the input
   */
  cancelTodo(): void {
    this.todoText = '';
  }
}
