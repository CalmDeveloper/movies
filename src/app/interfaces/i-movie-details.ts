import {IGenre} from "./i-genre";

export interface IMovieDetails {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number,
  production_countries: any[]
}
