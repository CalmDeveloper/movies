import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FormsModule} from "@angular/forms";

import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {NgSelectModule} from '@ng-select/ng-select';
import {MatButton} from "@angular/material/button";
import {MatProgressBar} from "@angular/material/progress-bar";

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {MoviePageComponent} from './pages/movie-page/movie-page.component';
import {MoviesPageComponent} from './pages/movies-page/movies-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {LoaderComponent} from './components/loader/loader.component';
import {HeaderComponent} from './components/header/header.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {PaginatorComponent} from './components/paginator/paginator.component';





@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    MainLayoutComponent,
    MoviePageComponent,
    MoviesPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    LoaderComponent,
    StarRatingComponent,
    PaginatorComponent,
    MovieInfoComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatProgressSpinner,
        MatPaginatorModule,
        MatIcon,
        MatTooltip,
        FormsModule,
        NgSelectModule,
        MatButton,
      MatProgressBar
    ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
