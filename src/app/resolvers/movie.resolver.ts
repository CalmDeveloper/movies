import {ResolveFn, Router} from '@angular/router';
import {MoviesService} from "../services";
import {inject} from "@angular/core";
import {catchError, EMPTY} from "rxjs";

export const movieResolver: ResolveFn<any> = (route) => {
  const router = inject(Router);
  const movieId = route.paramMap.get('id');
  return inject(MoviesService).details(movieId).pipe(catchError((err) => {
    console.error(`Error during loading movie by id ${movieId}`, err)
    router.navigate(['/not-found']);
    return EMPTY;
  }))
};
