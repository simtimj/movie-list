import MovieList from './MovieList.js';
import Search from './Search.js';
import Movies from './Movies.js'
import Add from './Add.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: Movies,
      filtered: Movies,
      submittedFilter: Movies,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.setFilteredSubmit = this.setFilteredSubmit.bind(this)
    this.setAdd = this.setAdd.bind(this);
  }

  // Search
  // Search Filter
  handleInputChange(query) {
    this.setState({
      submittedFilter: this.state.movies
    })
    var newMovies = this.state.movies.filter(movie =>
      movie.title.includes(query))
    if (!newMovies.length) {
      newMovies = [{title: 'No movie is found'}]
    }
    this.setState({
      filtered: newMovies
    })

  }

  // Submit search filter
  setFilteredSubmit() {
    this.setState({
      submittedFilter: this.state.filtered
    })
  }


  //Add
  // 
  // handleAddInput(movie){
  //   this.state.movies[movie.title] = movie.title
  // }

  // Submit add input
  setAdd(newMovie) {
    var newMovieObj = {'title': newMovie}
    this.state.movies.push(newMovieObj)
    this.setState({
      movies: this.state.movies
    })
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Add setAdd={this.setAdd}/>
        <Search handleInputChange={this.handleInputChange} setFilteredSubmit={this.setFilteredSubmit}/>
        <MovieList movies={this.state.submittedFilter}/>
      </div>
    )
  }
}

export default App;


/*
npm install live-server -g          live-server
npm install -g babel-cli            babel

npm run build     to run babel
*/