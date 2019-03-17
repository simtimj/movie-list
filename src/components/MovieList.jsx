 import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
  <ul>
    {props.movies.map(movie =>
      <MovieListEntry key={movie.title} movie={movie} />
    )}
  </ul>
)

export default MovieList;