const baseUrl = 'https://api.themoviedb.org/3';
export const urls ={
  movie:`${baseUrl}/discover/movie`,
  genres:`${baseUrl}/genre/movie/list`,
  details:`${baseUrl}/movie`,
  keywords:`${baseUrl}/search/movie`,
  countries:`${baseUrl}/configuration/countries?language=en-US`,
  miniPoster: `https://image.tmdb.org/t/p/w500`,
  noFoundImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
  notFoundPageImage: "https://i.sstatic.net/6M513.png",
  imdbLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png'
}
