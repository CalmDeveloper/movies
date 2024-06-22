import {Component, Input} from '@angular/core';
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  @Input() movies: IMovie[];
}
