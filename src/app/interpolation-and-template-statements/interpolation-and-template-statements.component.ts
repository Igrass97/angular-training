import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-and-template-statements',
  templateUrl: './interpolation-and-template-statements.component.html',
  styleUrls: ['./interpolation-and-template-statements.component.css']
})
export class InterpolationAndTemplateStatementsComponent implements OnInit {
  // Property that will be interpolated in the template
  public name = 'Ignacio';

  public showMsg = false;

  constructor() { }

  ngOnInit(): void {
  }

  // This will be used as a template statement
  onHover(state: boolean): void {
    this.showMsg = state;
  }
}
