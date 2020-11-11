import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {
  @Output() public onButtonPressed: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(): void {
    this.onButtonPressed.emit();
  }
}
