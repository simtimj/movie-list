import MovieList from './MovieList.js';
import Search from './Search.js';
import Movies from './Movies.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: Movies
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.testFunction = this.testFunction.bind(this);
  }

  handleInputChange(query) {
    var newMovies = this.state.movies.filter(movie => movie.title.includes(query));
    if (!newMovies.length) {
      newMovies = [{ title: 'No movie is found' }];
    }
    this.setState({
      movies: newMovies
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
      React.createElement(Search, { handleInputChange: this.handleInputChange }),
      React.createElement(MovieList, { movies: this.state.movies })
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJxdWVyeSIsIm5ld01vdmllcyIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJpbmNsdWRlcyIsImxlbmd0aCIsInNldFN0YXRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5COztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47O0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFQO0FBREcsS0FBYjs7QUFJQSxTQUFLUSxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQTtBQUNEOztBQUVERCxvQkFBa0JFLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQUlDLFlBQVksS0FBS0wsS0FBTCxDQUFXQyxNQUFYLENBQWtCSyxNQUFsQixDQUF5QkMsU0FDdkNBLE1BQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQkwsS0FBckIsQ0FEYyxDQUFoQjtBQUVBLFFBQUksQ0FBQ0MsVUFBVUssTUFBZixFQUF1QjtBQUNyQkwsa0JBQVksQ0FBQyxFQUFDRyxPQUFPLG1CQUFSLEVBQUQsQ0FBWjtBQUNEO0FBQ0QsU0FBS0csUUFBTCxDQUFjO0FBQ1pWLGNBQU9JO0FBREssS0FBZDtBQUdEOztBQUVETyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRSwwQkFBQyxNQUFELElBQVEsbUJBQW1CLEtBQUtWLGlCQUFoQyxHQUZGO0FBR0UsMEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS0YsS0FBTCxDQUFXQyxNQUE5QjtBQUhGLEtBREY7QUFPRDtBQS9CK0I7O0FBa0NsQyxlQUFlTixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qcyc7XG5pbXBvcnQgTW92aWVzIGZyb20gJy4vTW92aWVzLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IE1vdmllc1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcbiAgICAvLyB0aGlzLnRlc3RGdW5jdGlvbiA9IHRoaXMudGVzdEZ1bmN0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShxdWVyeSkge1xuICAgIHZhciBuZXdNb3ZpZXMgPSB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT5cbiAgICAgIG1vdmllLnRpdGxlLmluY2x1ZGVzKHF1ZXJ5KSlcbiAgICBpZiAoIW5ld01vdmllcy5sZW5ndGgpIHtcbiAgICAgIG5ld01vdmllcyA9IFt7dGl0bGU6ICdObyBtb3ZpZSBpcyBmb3VuZCd9XVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vdmllczpuZXdNb3ZpZXNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICAgIDxTZWFyY2ggaGFuZGxlSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==