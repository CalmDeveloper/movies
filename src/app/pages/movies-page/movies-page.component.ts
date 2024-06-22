import {Component} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {IMovie} from "../../interfaces";
import {MoviesService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent {
  movies: IMovie[] = [];
  loading: boolean;

  constructor(storeService: StoreService, private moviesService: MoviesService, private router: Router) {
    storeService.storage.value.loadMovies(moviesService,router, function (value: any){
      storeService.storage.next(value)
    });
    storeService.storage.subscribe(({loading, movies}) => {
      this.loading = loading;
      this.movies = movies;
    });
  }
}
