import MovieList from './MovieList.js';
import Search from './Search.js';
import Movies from './Movies.js';
import Add from './Add.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: Movies,
      filtered: Movies,
      submittedFilter: Movies
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.setFilteredSubmit = this.setFilteredSubmit.bind(this);
    this.setAdd = this.setAdd.bind(this);
  }

  // Search
  // Search Filter
  handleInputChange(query) {
    this.setState({
      submittedFilter: this.state.movies
    });
    var newMovies = this.state.movies.filter(movie => movie.title.includes(query));
    if (!newMovies.length) {
      newMovies = [{ title: 'No movie is found' }];
    }
    this.setState({
      filtered: newMovies
    });
  }

  // Submit search filter
  setFilteredSubmit() {
    this.setState({
      submittedFilter: this.state.filtered
    });
  }

  //Add
  // 
  // handleAddInput(movie){
  //   this.state.movies[movie.title] = movie.title
  // }

  // Submit add input
  setAdd(newMovie) {
    var newMovieObj = { 'title': newMovie };
    this.state.movies.push(newMovieObj);
    this.setState({
      movies: this.state.movies
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Movie List'
      ),
      React.createElement(Add, { setAdd: this.setAdd }),
      React.createElement(Search, { handleInputChange: this.handleInputChange, setFilteredSubmit: this.setFilteredSubmit }),
      React.createElement(MovieList, { movies: this.state.submittedFilter })
    );
  }
}

export default App;

/*
npm install live-server -g          live-server
npm install -g babel-cli            babel

npm run build     to run babel
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiTW92aWVzIiwiQWRkIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsInN1Ym1pdHRlZEZpbHRlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsInNldEZpbHRlcmVkU3VibWl0Iiwic2V0QWRkIiwicXVlcnkiLCJzZXRTdGF0ZSIsIm5ld01vdmllcyIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJpbmNsdWRlcyIsImxlbmd0aCIsIm5ld01vdmllIiwibmV3TW92aWVPYmoiLCJwdXNoIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixVQUFoQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRUixNQURHO0FBRVhTLGdCQUFVVCxNQUZDO0FBR1hVLHVCQUFpQlY7QUFITixLQUFiOztBQU1BLFNBQUtXLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUF6QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUF6QjtBQUNBLFNBQUtFLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNEOztBQUVEO0FBQ0E7QUFDQUQsb0JBQWtCSSxLQUFsQixFQUF5QjtBQUN2QixTQUFLQyxRQUFMLENBQWM7QUFDWk4sdUJBQWlCLEtBQUtILEtBQUwsQ0FBV0M7QUFEaEIsS0FBZDtBQUdBLFFBQUlTLFlBQVksS0FBS1YsS0FBTCxDQUFXQyxNQUFYLENBQWtCVSxNQUFsQixDQUF5QkMsU0FDdkNBLE1BQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQk4sS0FBckIsQ0FEYyxDQUFoQjtBQUVBLFFBQUksQ0FBQ0UsVUFBVUssTUFBZixFQUF1QjtBQUNyQkwsa0JBQVksQ0FBQyxFQUFDRyxPQUFPLG1CQUFSLEVBQUQsQ0FBWjtBQUNEO0FBQ0QsU0FBS0osUUFBTCxDQUFjO0FBQ1pQLGdCQUFVUTtBQURFLEtBQWQ7QUFJRDs7QUFFRDtBQUNBSixzQkFBb0I7QUFDbEIsU0FBS0csUUFBTCxDQUFjO0FBQ1pOLHVCQUFpQixLQUFLSCxLQUFMLENBQVdFO0FBRGhCLEtBQWQ7QUFHRDs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0FLLFNBQU9TLFFBQVAsRUFBaUI7QUFDZixRQUFJQyxjQUFjLEVBQUMsU0FBU0QsUUFBVixFQUFsQjtBQUNBLFNBQUtoQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JpQixJQUFsQixDQUF1QkQsV0FBdkI7QUFDQSxTQUFLUixRQUFMLENBQWM7QUFDWlIsY0FBUSxLQUFLRCxLQUFMLENBQVdDO0FBRFAsS0FBZDtBQUdEOztBQUVEa0IsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUUsMEJBQUMsR0FBRCxJQUFLLFFBQVEsS0FBS1osTUFBbEIsR0FGRjtBQUdFLDBCQUFDLE1BQUQsSUFBUSxtQkFBbUIsS0FBS0gsaUJBQWhDLEVBQW1ELG1CQUFtQixLQUFLRSxpQkFBM0UsR0FIRjtBQUlFLDBCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtOLEtBQUwsQ0FBV0csZUFBOUI7QUFKRixLQURGO0FBUUQ7QUFoRStCOztBQW1FbEMsZUFBZVIsR0FBZjs7QUFHQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnO1xuaW1wb3J0IE1vdmllcyBmcm9tICcuL01vdmllcy5qcydcbmltcG9ydCBBZGQgZnJvbSAnLi9BZGQuanMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogTW92aWVzLFxuICAgICAgZmlsdGVyZWQ6IE1vdmllcyxcbiAgICAgIHN1Ym1pdHRlZEZpbHRlcjogTW92aWVzLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNldEZpbHRlcmVkU3VibWl0ID0gdGhpcy5zZXRGaWx0ZXJlZFN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRBZGQgPSB0aGlzLnNldEFkZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gU2VhcmNoXG4gIC8vIFNlYXJjaCBGaWx0ZXJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UocXVlcnkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRlZEZpbHRlcjogdGhpcy5zdGF0ZS5tb3ZpZXNcbiAgICB9KVxuICAgIHZhciBuZXdNb3ZpZXMgPSB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT5cbiAgICAgIG1vdmllLnRpdGxlLmluY2x1ZGVzKHF1ZXJ5KSlcbiAgICBpZiAoIW5ld01vdmllcy5sZW5ndGgpIHtcbiAgICAgIG5ld01vdmllcyA9IFt7dGl0bGU6ICdObyBtb3ZpZSBpcyBmb3VuZCd9XVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlcmVkOiBuZXdNb3ZpZXNcbiAgICB9KVxuXG4gIH1cblxuICAvLyBTdWJtaXQgc2VhcmNoIGZpbHRlclxuICBzZXRGaWx0ZXJlZFN1Ym1pdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1Ym1pdHRlZEZpbHRlcjogdGhpcy5zdGF0ZS5maWx0ZXJlZFxuICAgIH0pXG4gIH1cblxuXG4gIC8vQWRkXG4gIC8vIFxuICAvLyBoYW5kbGVBZGRJbnB1dChtb3ZpZSl7XG4gIC8vICAgdGhpcy5zdGF0ZS5tb3ZpZXNbbW92aWUudGl0bGVdID0gbW92aWUudGl0bGVcbiAgLy8gfVxuXG4gIC8vIFN1Ym1pdCBhZGQgaW5wdXRcbiAgc2V0QWRkKG5ld01vdmllKSB7XG4gICAgdmFyIG5ld01vdmllT2JqID0geyd0aXRsZSc6IG5ld01vdmllfVxuICAgIHRoaXMuc3RhdGUubW92aWVzLnB1c2gobmV3TW92aWVPYmopXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3ZpZXM6IHRoaXMuc3RhdGUubW92aWVzXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllIExpc3Q8L2gxPlxuICAgICAgICA8QWRkIHNldEFkZD17dGhpcy5zZXRBZGR9Lz5cbiAgICAgICAgPFNlYXJjaCBoYW5kbGVJbnB1dENoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gc2V0RmlsdGVyZWRTdWJtaXQ9e3RoaXMuc2V0RmlsdGVyZWRTdWJtaXR9Lz5cbiAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUuc3VibWl0dGVkRmlsdGVyfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cbi8qXG5ucG0gaW5zdGFsbCBsaXZlLXNlcnZlciAtZyAgICAgICAgICBsaXZlLXNlcnZlclxubnBtIGluc3RhbGwgLWcgYmFiZWwtY2xpICAgICAgICAgICAgYmFiZWxcblxubnBtIHJ1biBidWlsZCAgICAgdG8gcnVuIGJhYmVsXG4qLyJdfQ==