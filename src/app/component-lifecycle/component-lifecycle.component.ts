import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements OnInit {
  public showChild = false;
  public showChildMessage = 'Show child';
  public childOneMsg = '';

  public toggleShowChild() {
    this.showChild = !this.showChild;

    if (!this.showChild) {
      this.showChildMessage = 'Show child'
    } else {
      this.showChildMessage = 'Destroy child'
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
