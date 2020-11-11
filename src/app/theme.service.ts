import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';
  private themeSource: BehaviorSubject<string> = new BehaviorSubject(this.theme);
  public themeSource$: Observable<string> = this.themeSource.asObservable();

  public toggleTheme(): void {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }

    this.themeSource.next(this.theme);
  }
  constructor() { }
}
