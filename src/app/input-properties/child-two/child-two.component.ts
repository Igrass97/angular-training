import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  @Input()
  get msg(): string { return this._msg }
  set msg(msg: string) {
    this._msg = msg.trim() + ' intercepted input property';
  }

  constructor() { }

  private _msg: string;

  ngOnInit(): void {
  }

}
