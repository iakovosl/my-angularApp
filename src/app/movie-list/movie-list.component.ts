import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { movies } from '../data/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMoviesByName();
  }

}
