import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  private subj: Subject<number> = new Subject();
  public obs$: Observable<number> = this.subj.asObservable();
  public count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  emitNewNumber(): void {
    this.subj.next(this.count++);
  }
}
