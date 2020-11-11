import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit {
  public movieName: string;
  public movieYear: number;
  public movieCount: number;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.moviesSource$.subscribe(movies => this.movieCount = movies.length);
  }

  addMovie(): void {
    if (!this.movieName || !this.movieYear) return;

    this.movieService.addMovie(this.movieName, this.movieYear);
    this.movieName = null;
    this.movieYear = null;
  }
}
