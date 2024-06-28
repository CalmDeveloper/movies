import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGenre} from "../../interfaces";
import {ICountry} from "../../interfaces/i-country";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit{
  genres: IGenre[] = [];
  countries: ICountry[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.countries = this.route.snapshot.data['countriesData'];
    this.genres = this.route.snapshot.data['genresData']['genres'];
  }
}
