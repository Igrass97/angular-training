import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-nine',
  templateUrl: './child-nine.component.html',
  styleUrls: ['./child-nine.component.css']
})
export class ChildNineComponent implements OnInit {
  @Input() public fontSize;
  @Output() public fontSizeChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any): void {
    this.fontSizeChange.emit(event.target.value);
  }
}
