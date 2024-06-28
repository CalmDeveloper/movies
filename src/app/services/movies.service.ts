import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {Observable} from "rxjs";
import {IAllMoviesData, IGenresData, IMovieDetails} from "../interfaces";
import {ICountry} from "../interfaces/i-country";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  accessToken: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWIxZTJlMTBlNTU0ZWI2YjU4NGE5ZGE3ZTI5YjAzNyIsInN1YiI6IjYyOTQ5MmQ2MDllZDhmMTI1NDc4Yjc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZVd5vjV7IBhjZAX_sjuDdqNUlriythv5ZIpl0cbPJhU';
  defaultOptions = {headers: {Authorization: `Bearer ${this.accessToken}`}};

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getMovies(params: any): Observable<IAllMoviesData> {
    const options = Object.assign({}, this.defaultOptions, {params});
    return this.httpClient.get<IAllMoviesData>(urls.movie, options)
  }

  getGenres(): Observable<IGenresData> {
    return this.httpClient.get<IGenresData>(urls.genres, this.defaultOptions);
  }

  getCountries(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>(urls.countries, this.defaultOptions);
  }

  details(id: string | null): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(`${urls.details}/${id}`, this.defaultOptions);
  }

  searchByKeywords(params: any): Observable<IAllMoviesData> {
    const options = Object.assign({}, this.defaultOptions, {params});
    return this.httpClient.get<IAllMoviesData>(urls.keywords, options);
  }
}
