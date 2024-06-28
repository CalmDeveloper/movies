import { ResolveFn } from '@angular/router';
import {MoviesService} from "../services";
import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {IGenresData} from "../interfaces";

export const genresResolver: ResolveFn<Observable<IGenresData>> = () => {
  return inject(MoviesService).getGenres();
};
