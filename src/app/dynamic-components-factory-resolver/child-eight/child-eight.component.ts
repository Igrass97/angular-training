import { Component, Input, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';

@Component({
  selector: 'app-child-eight',
  templateUrl: './child-eight.component.html',
  styleUrls: ['./child-eight.component.css']
})
export class ChildEightComponent implements OnInit, DynamicComponent {
  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
