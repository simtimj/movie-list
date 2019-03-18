 import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
  <div id="movieListEntry">
    {props.movies.map((movie, index) =>
      <MovieListEntry movie={movie} index={index} />
    )}
  </div>
)

export default MovieList;