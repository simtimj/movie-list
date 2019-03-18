 import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
  <div id="movieListEntry">
    {props.movies.map(movie =>
      <MovieListEntry movie={movie} />
    )}
  </div>
)

export default MovieList;