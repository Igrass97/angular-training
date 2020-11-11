import { Component, Input, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';

@Component({
  selector: 'app-child-seven',
  templateUrl: './child-seven.component.html',
  styleUrls: ['./child-seven.component.css']
})
export class ChildSevenComponent implements OnInit, DynamicComponent {
  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
