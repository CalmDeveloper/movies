import {Component, Input, OnInit} from '@angular/core';
import {urls} from "../../constants";
import {IMovie} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit{
  @Input() movie: IMovie;
  link: string = '';
  defaultLink: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.link = urls.miniPoster + this.movie.poster_path;
    this.defaultLink = urls.noFoundImage;
  }

  onError($event: ErrorEvent) {
    const imgElem = $event.target as HTMLImageElement;
    imgElem.src = this.defaultLink;
  }

  onClick() {
    this.router.navigate([`movie/${this.movie.id}`])
  }
}
