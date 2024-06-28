import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {MoviesPageComponent} from "./pages/movies-page/movies-page.component";
import {genresResolver} from "./resolvers/generes.resolver";
import {countriesResolver} from "./resolvers/countries.resolver";
import {MoviePageComponent} from "./pages/movie-page/movie-page.component";
import {movieResolver} from "./resolvers/movie.resolver";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies',  component: MoviesPageComponent, },
      {path: 'movie/:id',  component: MoviePageComponent, pathMatch: 'full', resolve: {movieData: movieResolver}},
      {path: 'not-found',  component: NotFoundPageComponent},
      { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
    ],
    resolve: {genresData: genresResolver, countriesData: countriesResolver}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
