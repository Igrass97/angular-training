import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IMovie {
  name: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: IMovie[] = [];
  private moviesSource: BehaviorSubject<IMovie[]> = new BehaviorSubject(this.movies);
  public moviesSource$: Observable<IMovie[]> = this.moviesSource.asObservable();

  public addMovie(name: string, year: number): void {
    this.movies.push({ name, year });
    this.moviesSource.next(this.movies);
  }

  constructor() { }
}
