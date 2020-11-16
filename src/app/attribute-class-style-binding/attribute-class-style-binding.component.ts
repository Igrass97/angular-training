import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-class-style-binding',
  templateUrl: './attribute-class-style-binding.component.html',
  styleUrls: ['./attribute-class-style-binding.component.css']
})
export class AttributeClassStyleBindingComponent implements OnInit {
  public actionName = 'Join now';
  public isSingleStyleActive = false;
  public multipleClassesStr = 'big dark';
  public squareBackgroundColor = 'lightblue';
  public buttonStyleExpression = {
    border: 'none',
    backgroundColor: 'pink',
    padding: '1rem 2rem',
    outline: 'none',
    cursor: 'pointer'
  };

  constructor() { }

  ngOnInit(): void {
  }

  activateStyles(): void {
    this.isSingleStyleActive = !this.isSingleStyleActive;
  }

  changeSquareBgColor(): void {
    if (this.squareBackgroundColor === 'lightblue') {
      this.squareBackgroundColor = 'lightgreen';
    } else {
      this.squareBackgroundColor = 'lightblue';
    }
  }
}
