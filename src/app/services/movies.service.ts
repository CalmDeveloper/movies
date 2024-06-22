import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {Observable} from "rxjs";
import {IAllMoviesData} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  accessToken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWIxZTJlMTBlNTU0ZWI2YjU4NGE5ZGE3ZTI5YjAzNyIsInN1YiI6IjYyOTQ5MmQ2MDllZDhmMTI1NDc4Yjc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZVd5vjV7IBhjZAX_sjuDdqNUlriythv5ZIpl0cbPJhU';
  defaultOptions = {headers: {Authorization: `Bearer ${this.accessToken}`}};

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getMovies(page = 1, with_genres = '', sort_by = ''): Observable<IAllMoviesData> {
    // year: '2000'
    const options = Object.assign({}, this.defaultOptions, {params: {page, with_genres, sort_by}});
    return this.httpClient.get<IAllMoviesData>(urls.movie, options);
  }

  getGenres() {
    return this.httpClient.get(urls.genres, this.defaultOptions);
  }

  details(id: string) {
    return this.httpClient.get(`${urls.details}/${id}`, this.defaultOptions);
  }

  searchByKeywords(value: string, page: number) {
    const options = Object.assign({}, this.defaultOptions, {params: {query: value, page}});
    return this.httpClient.get(urls.keywords, options);
  }
}
