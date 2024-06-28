import {Component, Input, OnInit} from '@angular/core';
import {IMovieDetails} from "../../interfaces";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css'
})
export class MovieInfoComponent implements OnInit {
  country: string;
  imdbLink: string;
  imdbLogo: string;
  defaultLink: string;
  link: string;
  genres: string;
  @Input() movieDetails: IMovieDetails;

  constructor() {}

  ngOnInit(): void {
    this.imdbLogo = urls.imdbLogo;
    this.imdbLink = `https://www.imdb.com/title/${this.movieDetails.imdb_id}/`;
    this.country = this.movieDetails.production_countries ? this.movieDetails.production_countries.map((value: any) => value.name).toString().replaceAll(',', ', ') : 'unknown';
    this.link = urls.miniPoster + this.movieDetails.poster_path;
    this.defaultLink = urls.noFoundImage;
    this.genres = this.movieDetails.genres.map((value: any) => value.name).toString().replaceAll(',', ', ')
  }

  onError($event: ErrorEvent) {
    const imgElem = $event.target as HTMLImageElement;
    imgElem.src = this.defaultLink;
  }
}
