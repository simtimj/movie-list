 import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
  <ul>
    {props.movies.map(movie =>
      <MovieListEntry movie={movie} />
    )}
  </ul>
)

export default MovieList;