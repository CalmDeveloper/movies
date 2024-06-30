import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {StoreService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})

export class PaginatorComponent implements OnInit {
  loading: boolean;
  pageIndex: number = 0;
  pageSize: number = 20;
  length: number = 0;

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.storeService.storage.subscribe(({loading, moviesData: {page, total_results}}) => {
      this.loading = loading;
      this.pageIndex = page - 1
      this.length = total_results;
    });
  }

  onPageChange($event: PageEvent) {
    this.router.navigate(['movies'], {queryParams: Object.assign({}, this.route.snapshot.queryParams, {page: +$event.pageIndex + 1})})
  }
}
