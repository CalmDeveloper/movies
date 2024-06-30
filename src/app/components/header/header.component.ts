import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IGenre, IMoviesRequestQueryParams, IYear} from "../../interfaces";
import {ISortItem} from "../../interfaces";
import {ICountry} from "../../interfaces/i-country";

function getYears(startYear: number = 1980) {
  let currentYear = new Date().getFullYear(), years = [];
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years.map((item) => {
    let str = item.toString();
    return {id: str, name: str}
  }).reverse();
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  //search panel
  search: string = '';
  searchPanel: HTMLDivElement;
  searchPanelStateOpened: boolean = false;

  //filter panel
  filterPanel: HTMLDivElement;
  filterPanelStateOpened: boolean = false;

  @Input() genres: IGenre[];
  selectedGenres: number[] = [];

  sortItems: ISortItem[] = [
    {id: 'popularity.desc', name: 'Popular'},
    {id: 'revenue.desc', name: 'Top profit'},
    {id: 'vote_count.desc', name: 'Top ratings'}
  ];
  selectedSortParam: null | string = null;

  @Input() countries: ICountry[];
  country: null | string = null;

  year: null | string = null;
  years: IYear[] = getYears(1960)


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.searchPanel = document.getElementById('search-panel') as HTMLDivElement;
    this.filterPanel = document.getElementById('filter-panel') as HTMLDivElement;

    this.route.queryParams.subscribe(params => {
      this.search = '';
      this.clearFilters();
      if(params['query']) {
        this.search = params['query'];
      } else  {

        if (this.searchPanelStateOpened) this.onSearchBtnClick(false);
      }

      if (params['sort_by'] || params['with_genres'] || params['with_origin_country'] || params['year']) {
        if (params['sort_by']) this.selectedSortParam = params['sort_by'];
        if (params['with_genres']) this.selectedGenres = params['with_genres'].split(',').map((item: string) => +item);
        if (params['with_origin_country']) this.country = params['with_origin_country'];
        if (params['year']) this.year = params['year'];
      } else  {
        if (this.filterPanelStateOpened) this.onFilterBtnClick(false);
      }
    })
  }

  onSearchBtnClick(value: boolean) {
    this.searchPanelStateOpened = value;
    if (this.searchPanelStateOpened) {
      this.searchPanel.style.maxHeight = this.searchPanel.scrollHeight + "px";
      this.searchPanel.style.overflow = 'visible'
      this.searchPanel.style.margin = '15px 0 0 0'
      this.clearFilters();
      if (this.filterPanelStateOpened) this.onFilterBtnClick(false);
    } else {
      this.searchPanel.style.maxHeight = 0 + "px"
      this.searchPanel.style.overflow = 'hidden';
      this.searchPanel.style.margin = 0 + "px";
    }
  }

  onSearchSubmit($event: any) {
    const ENTER_KEY = 13;
    if ($event.which === ENTER_KEY) {
      const queryParams = $event.target.value && $event.target.value.length ? {page: 1,query: $event.target.value} : {page: 1};
      this.router.navigate(['movies'], {queryParams})
    }
  }

  onSearch(){
    const queryParams = this.search && this.search.length ? {page: 1,query: this.search} : {page: 1};
    this.router.navigate(['movies'], {queryParams})
  }

  onFilterBtnClick(value: boolean) {
    this.filterPanelStateOpened = value;
    if (this.filterPanelStateOpened) {
      this.filterPanel.style.maxHeight = this.filterPanel.scrollHeight + "px";
      this.filterPanel.style.overflow = 'visible'
      this.filterPanel.style.margin = '50px 0 30px 0'
      this.search = '';
      if (this.searchPanelStateOpened) this.onSearchBtnClick(false);
    } else {
      this.filterPanel.style.maxHeight = 0 + "px"
      this.filterPanel.style.overflow = 'hidden';
      this.filterPanel.style.margin = 0 + "px";
    }
  }

  applyFilters(defaultParams: IMoviesRequestQueryParams = {page: 1}) {
    if (this.selectedGenres.length) defaultParams['with_genres'] = this.selectedGenres.join().toString();
    if (this.selectedSortParam) defaultParams['sort_by'] = this.selectedSortParam;
    if (this.country) defaultParams['with_origin_country'] = this.country;
    if (this.year) defaultParams['year'] = this.year;
    this.router.navigate(['movies'], {queryParams: defaultParams})
  }

  clearFilters() {
    this.country = null;
    this.selectedSortParam = null;
    this.selectedGenres = [];
    this.year = null;
  }

  clearAllParams(){
    this.router.navigate(['movies'], {queryParams: {page: 1}})
  }
}
