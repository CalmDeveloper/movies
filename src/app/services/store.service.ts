import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storage = new BehaviorSubject({
    moviesData: {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0
    },
    loading: false,
    setLoading(cb: any, storeService: any, value: boolean) {
      this.loading = value
      cb(storeService, this);
    },
    loadMovies: function (moviesService: any, queryParams: any, storeService: any, updateFn: any) {
      this.setLoading(updateFn, storeService, true);
      moviesService[queryParams.query ? 'searchByKeywords' : 'getMovies'](queryParams).subscribe((data: any) => {
        this.moviesData = data
        this.setLoading(updateFn, storeService, false);
      },(err: any) => {
        console.error('Error during loading movies page', err);
        this.setLoading(updateFn, storeService, false);
      });
    }
  })

}
