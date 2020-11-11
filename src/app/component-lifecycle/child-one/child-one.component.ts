import { Component, OnChanges, OnInit, Input, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() msg: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Hook] ChildOneComponent called ngOnChanges');
    console.log('[Hook] changes');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('[Hook] ChildOneComponent called ngOnInit');
  }

  ngDoCheck(): void {
    console.log(`[Hook] ChildOneComponent called ngDoCheck 
    (this hook is executed on every change detection check that angular
    performs for example when a property that is displayed in the template changes)
    `);
  }

  ngAfterContentInit(): void {
    console.log(`[Hook] ChildOneComponent called ngAfterContentInit (this hook is executed
      when content has been projected to the view via ng-content `);
  }

  ngAfterContentChecked(): void {
    console.log(`[Hook] ChildOneComponent called ngAfterContentChecked (this hook is executed
      when the change detection has checked the projected content`);
  }

  ngAfterViewInit(): void {
    console.log(`[Hook] ChildOneComponent called ngAfterViewInit (this hook is executed
      when view of our component is rendered`);
  }

  ngAfterViewChecked(): void {
    console.log(`[Hook] ChildOneComponent called ngAfterViewChecked (this hook is executed
      when view of our component is checked for changes`);
  }

  ngOnDestroy(): void {
    console.log(`[Hook] ChildOneComponent called ngOnDestroy`);
  }
}
