import MovieList from './MovieList.js';
// import Search from '../../compiled/src/components/Search';
// import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null
    }

    // this.props.handleInputChange = this.handleInputChange.bind(this)
  }

  // handleInputChange(query) {
  //   var newMovies = this.props.movies.filter(movie =>
  //     movie.title.includes(query))
  //   if (!newMovies.length) {
  //     newMovies = [{title: 'No movie is found'}]
  //   }
  //   this.setState({
  //     movies:newMovies
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        {/* <Search /> */}
        <MovieList movies={['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']}/>
      </div>
    )
  }
}

export default App;