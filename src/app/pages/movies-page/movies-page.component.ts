import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../services";
import {IMovie} from "../../interfaces";
import {MoviesService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent implements OnInit{
  movies: IMovie[] = [];
  loading: boolean;

  constructor(private storeService: StoreService, private moviesService: MoviesService, private route: ActivatedRoute) {
    storeService.storage.subscribe(({loading, moviesData: {results}}) => {
      this.movies = results;
      this.loading = loading;
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.storeService.storage.value.loadMovies(this.moviesService, params, this.storeService, function (service: any, value: any) {
        service.storage.next(value)
      });
    })
  }
}
