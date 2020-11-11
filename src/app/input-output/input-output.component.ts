import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  public completedTodos: string[] = [];
  public todoList: string[] = [];
  public newTodoName: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCompleteTodo(todo: string): void {
    this.todoList = this.todoList.filter(t => t !== todo);
    this.completedTodos.push(todo);
  }

  addNewTodo(): void {
    this.todoList.push(this.newTodoName);
  }
}
