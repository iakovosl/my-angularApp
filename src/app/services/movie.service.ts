import { EventEmitter, Injectable } from '@angular/core';
import { movies } from '../data/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = movies;
 

  getMovies() {
    return this.movies;
  }

  getMoviesByName() {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
    
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    
    movies.sort(compare);
    return this.movies;
  }

  constructor() { }
}
