import { Component, OnInit } from '@angular/core';
import { IMovie, MovieService } from '../../movie.service';

@Component({
  selector: 'app-child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.css']
})
export class ChildFiveComponent implements OnInit {
  public movies: IMovie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.moviesSource$.subscribe(movies => this.movies = movies);
  }
}
