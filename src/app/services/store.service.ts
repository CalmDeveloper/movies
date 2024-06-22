import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storage = new BehaviorSubject({
    movies: [],
    loading: false,
    getSortParam(state: string) {
      if (state === '/movies/top-profit') {
        return 'revenue.desc';
      } else if (state === '/movies/top-ratings') {
        return 'vote_count.desc';
      }
      return '';
    },
    loadMovies: function (moviesService: any, router: any, update: any) {
      update(this);
      this.loading = true;
      const sortBy = this.getSortParam(router.url)
      moviesService.getMovies(1, '', sortBy).subscribe(({results, total_results, total_pages, page}: any) => {
        this.movies = results;
        this.loading = false;
        update(this);
      });
    }
  })

}
