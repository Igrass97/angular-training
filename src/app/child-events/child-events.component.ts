import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildThreeComponent } from './child-three/child-three.component';

@Component({
  selector: 'app-child-events',
  templateUrl: './child-events.component.html',
  styleUrls: ['./child-events.component.css']
})
export class ChildEventsComponent implements OnInit {
  public count = 0;

  @ViewChild(ChildThreeComponent)
  public childThreeComponent: ChildThreeComponent;

  onChildThreeClicked(): void {
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
