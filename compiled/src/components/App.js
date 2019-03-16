import MovieList from './MovieList.js';
// import Search from '../../compiled/src/components/Search';
// import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null

      // this.props.handleInputChange = this.handleInputChange.bind(this)
    };
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Movie List'
      ),
      React.createElement(MovieList, { movies: ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina'] })
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFROztBQUdWO0FBSmEsS0FBYjtBQUtEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFHRSwwQkFBQyxTQUFELElBQVcsUUFBUSxDQUFDLFlBQUQsRUFBZSxTQUFmLEVBQTBCLFVBQTFCLEVBQXNDLFVBQXRDLEVBQWtELFlBQWxELENBQW5CO0FBSEYsS0FERjtBQU9EO0FBOUIrQjs7QUFpQ2xDLGVBQWVQLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG4vLyBpbXBvcnQgU2VhcmNoIGZyb20gJy4uLy4uL2NvbXBpbGVkL3NyYy9jb21wb25lbnRzL1NlYXJjaCc7XG4vLyBpbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzeCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBudWxsXG4gICAgfVxuXG4gICAgLy8gdGhpcy5wcm9wcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgLy8gaGFuZGxlSW5wdXRDaGFuZ2UocXVlcnkpIHtcbiAgLy8gICB2YXIgbmV3TW92aWVzID0gdGhpcy5wcm9wcy5tb3ZpZXMuZmlsdGVyKG1vdmllID0+XG4gIC8vICAgICBtb3ZpZS50aXRsZS5pbmNsdWRlcyhxdWVyeSkpXG4gIC8vICAgaWYgKCFuZXdNb3ZpZXMubGVuZ3RoKSB7XG4gIC8vICAgICBuZXdNb3ZpZXMgPSBbe3RpdGxlOiAnTm8gbW92aWUgaXMgZm91bmQnfV1cbiAgLy8gICB9XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBtb3ZpZXM6bmV3TW92aWVzXG4gIC8vICAgfSlcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgICB7LyogPFNlYXJjaCAvPiAqL31cbiAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e1snTWVhbiBHaXJscycsICdIYWNrZXJzJywgJ1RoZSBHcmV5JywgJ1N1bnNoaW5lJywgJ0V4IE1hY2hpbmEnXX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=