import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { movies } from '../data/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.movie = movies[+params.get('movieId')];
    });
  }
}
