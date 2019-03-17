import MovieList from './MovieList.js';
import Search from './Search.js';
import Movies from './Movies.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: Movies
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    // this.testFunction = this.testFunction.bind(this);
  }

  handleInputChange(query) {
    var newMovies = this.state.movies.filter(movie =>
      movie.title.includes(query))
    if (!newMovies.length) {
      newMovies = [{title: 'No movie is found'}]
    }
    this.setState({
      movies:newMovies
    })
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search handleInputChange={this.handleInputChange}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;