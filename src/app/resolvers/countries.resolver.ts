import { ResolveFn } from '@angular/router';
import {MoviesService} from "../services";
import {inject} from "@angular/core";

export const countriesResolver: ResolveFn<any> = () => {
  return inject(MoviesService).getCountries();
};
