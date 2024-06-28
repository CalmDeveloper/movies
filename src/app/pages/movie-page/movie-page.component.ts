import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IMovieDetails} from "../../interfaces";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent implements OnInit {
  movieDetails: IMovieDetails;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieDetails = this.route.snapshot.data['movieData']
  }
}
