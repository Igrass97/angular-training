import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-six',
  templateUrl: './child-six.component.html',
  styleUrls: ['./child-six.component.css']
})
export class ChildSixComponent implements OnInit {
  @Input() items: string[] = [];
  @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo: string): void {
    this.onDeleteTodo.emit(todo);
  }
}
