import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {MoviesPageComponent} from "./pages/movies-page/movies-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies',  component: MoviesPageComponent, },
      {path: 'movies/top-profit',  component: MoviesPageComponent},
      {path: 'movies/top-ratings',  component: MoviesPageComponent},
      {path: 'not-found',  component: NotFoundPageComponent},
      { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
