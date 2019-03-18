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
      submittedFilter: Movies,
      watched: false,
      toWatch: Movies,
      watchedList: []
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

  // Submit add input
  setAdd(newMovie) {
    var titles = [];
    this.state.movies.map(movie => {
      titles.push(movie.title);
    });
    if (titles.includes(newMovie)) {
      alert("Movie is already on list");
    } else {
      var newId = this.state.movies.length;
      var newMovieObj = { 'id': newId, 'title': newMovie };
      this.state.movies.push(newMovieObj);
      this.setState({
        movies: this.state.movies
      });
    }
  }

  // Toggle watched / to watch
  toggleWatchedState() {}
  // if (this.state.watched) {
  //   this.setState({
  //     watched: false
  //   })
  // } else {
  //   this.setState({
  //     watched: true
  //   })
  // }


  // Add toWatch

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
      React.createElement(MovieList, { movies: this.state.submittedFilter, toggleWatchedState: this.toggleWatchedState })
    );
  }
}

export default App;

/*
npm install live-server -g          live-server
npm install -g babel-cli            babel
npm run build     to run babel
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiTW92aWVzIiwiQWRkIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsInN1Ym1pdHRlZEZpbHRlciIsIndhdGNoZWQiLCJ0b1dhdGNoIiwid2F0Y2hlZExpc3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJzZXRGaWx0ZXJlZFN1Ym1pdCIsInNldEFkZCIsInF1ZXJ5Iiwic2V0U3RhdGUiLCJuZXdNb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJuZXdNb3ZpZSIsInRpdGxlcyIsIm1hcCIsInB1c2giLCJhbGVydCIsIm5ld0lkIiwibmV3TW92aWVPYmoiLCJ0b2dnbGVXYXRjaGVkU3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFVBQWhCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47O0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFSLE1BREc7QUFFWFMsZ0JBQVVULE1BRkM7QUFHWFUsdUJBQWlCVixNQUhOO0FBSVhXLGVBQVMsS0FKRTtBQUtYQyxlQUFTWixNQUxFO0FBTVhhLG1CQUFZO0FBTkQsS0FBYjs7QUFTQSxTQUFLQyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxTQUFLRSxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZRixJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDRDs7QUFFRDtBQUNBO0FBQ0FELG9CQUFrQkksS0FBbEIsRUFBeUI7QUFDdkIsU0FBS0MsUUFBTCxDQUFjO0FBQ1pULHVCQUFpQixLQUFLSCxLQUFMLENBQVdDO0FBRGhCLEtBQWQ7QUFHQSxRQUFJWSxZQUFZLEtBQUtiLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmEsTUFBbEIsQ0FBeUJDLFNBQ3ZDQSxNQUFNQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJOLEtBQXJCLENBRGMsQ0FBaEI7QUFFQSxRQUFJLENBQUNFLFVBQVVLLE1BQWYsRUFBdUI7QUFDckJMLGtCQUFZLENBQUMsRUFBQ0csT0FBTyxtQkFBUixFQUFELENBQVo7QUFDRDtBQUNELFNBQUtKLFFBQUwsQ0FBYztBQUNaVixnQkFBVVc7QUFERSxLQUFkO0FBSUQ7O0FBRUQ7QUFDQUosc0JBQW9CO0FBQ2xCLFNBQUtHLFFBQUwsQ0FBYztBQUNaVCx1QkFBaUIsS0FBS0gsS0FBTCxDQUFXRTtBQURoQixLQUFkO0FBR0Q7O0FBRUQ7QUFDQVEsU0FBT1MsUUFBUCxFQUFpQjtBQUNmLFFBQUlDLFNBQVMsRUFBYjtBQUNBLFNBQUtwQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JvQixHQUFsQixDQUFzQk4sU0FBUztBQUM3QkssYUFBT0UsSUFBUCxDQUFZUCxNQUFNQyxLQUFsQjtBQUNELEtBRkQ7QUFHQSxRQUFJSSxPQUFPSCxRQUFQLENBQWdCRSxRQUFoQixDQUFKLEVBQStCO0FBQzdCSSxZQUFNLDBCQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSUMsUUFBUSxLQUFLeEIsS0FBTCxDQUFXQyxNQUFYLENBQWtCaUIsTUFBOUI7QUFDQSxVQUFJTyxjQUFjLEVBQUMsTUFBTUQsS0FBUCxFQUFjLFNBQVNMLFFBQXZCLEVBQWxCO0FBQ0EsV0FBS25CLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQnFCLElBQWxCLENBQXVCRyxXQUF2QjtBQUNBLFdBQUtiLFFBQUwsQ0FBYztBQUNaWCxnQkFBUSxLQUFLRCxLQUFMLENBQVdDO0FBRFAsT0FBZDtBQUdEO0FBQ0Y7O0FBRUQ7QUFDQXlCLHVCQUFxQixDQVVwQjtBQVRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0Y7O0FBRUFDLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFLDBCQUFDLEdBQUQsSUFBSyxRQUFRLEtBQUtqQixNQUFsQixHQUZGO0FBR0UsMEJBQUMsTUFBRCxJQUFRLG1CQUFtQixLQUFLSCxpQkFBaEMsRUFBbUQsbUJBQW1CLEtBQUtFLGlCQUEzRSxHQUhGO0FBSUUsMEJBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS1QsS0FBTCxDQUFXRyxlQUE5QixFQUErQyxvQkFBb0IsS0FBS3VCLGtCQUF4RTtBQUpGLEtBREY7QUFRRDtBQXRGK0I7O0FBeUZsQyxlQUFlL0IsR0FBZjs7QUFpQkEiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBNb3ZpZXMgZnJvbSAnLi9Nb3ZpZXMuanMnXG5pbXBvcnQgQWRkIGZyb20gJy4vQWRkLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IE1vdmllcyxcbiAgICAgIGZpbHRlcmVkOiBNb3ZpZXMsXG4gICAgICBzdWJtaXR0ZWRGaWx0ZXI6IE1vdmllcyxcbiAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgdG9XYXRjaDogTW92aWVzLFxuICAgICAgd2F0Y2hlZExpc3Q6W11cbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRGaWx0ZXJlZFN1Ym1pdCA9IHRoaXMuc2V0RmlsdGVyZWRTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWRkID0gdGhpcy5zZXRBZGQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIFNlYXJjaFxuICAvLyBTZWFyY2ggRmlsdGVyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0ZWRGaWx0ZXI6IHRoaXMuc3RhdGUubW92aWVzXG4gICAgfSlcbiAgICB2YXIgbmV3TW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXMuZmlsdGVyKG1vdmllID0+XG4gICAgICBtb3ZpZS50aXRsZS5pbmNsdWRlcyhxdWVyeSkpXG4gICAgaWYgKCFuZXdNb3ZpZXMubGVuZ3RoKSB7XG4gICAgICBuZXdNb3ZpZXMgPSBbe3RpdGxlOiAnTm8gbW92aWUgaXMgZm91bmQnfV1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJlZDogbmV3TW92aWVzXG4gICAgfSlcblxuICB9XG5cbiAgLy8gU3VibWl0IHNlYXJjaCBmaWx0ZXJcbiAgc2V0RmlsdGVyZWRTdWJtaXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0ZWRGaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyZWRcbiAgICB9KVxuICB9XG5cbiAgLy8gU3VibWl0IGFkZCBpbnB1dFxuICBzZXRBZGQobmV3TW92aWUpIHtcbiAgICB2YXIgdGl0bGVzID0gW107XG4gICAgdGhpcy5zdGF0ZS5tb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgIHRpdGxlcy5wdXNoKG1vdmllLnRpdGxlKTtcbiAgICB9KTtcbiAgICBpZiAodGl0bGVzLmluY2x1ZGVzKG5ld01vdmllKSkge1xuICAgICAgYWxlcnQoXCJNb3ZpZSBpcyBhbHJlYWR5IG9uIGxpc3RcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXdJZCA9IHRoaXMuc3RhdGUubW92aWVzLmxlbmd0aDtcbiAgICAgIHZhciBuZXdNb3ZpZU9iaiA9IHsnaWQnOiBuZXdJZCwgJ3RpdGxlJzogbmV3TW92aWV9XG4gICAgICB0aGlzLnN0YXRlLm1vdmllcy5wdXNoKG5ld01vdmllT2JqKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogdGhpcy5zdGF0ZS5tb3ZpZXNcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gVG9nZ2xlIHdhdGNoZWQgLyB0byB3YXRjaFxuICB0b2dnbGVXYXRjaGVkU3RhdGUoKSB7XG4gICAgLy8gaWYgKHRoaXMuc3RhdGUud2F0Y2hlZCkge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgIHdhdGNoZWQ6IGZhbHNlXG4gICAgLy8gICB9KVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgd2F0Y2hlZDogdHJ1ZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIH1cblxuXG5cbiAgLy8gQWRkIHRvV2F0Y2hcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5Nb3ZpZSBMaXN0PC9oMT5cbiAgICAgICAgPEFkZCBzZXRBZGQ9e3RoaXMuc2V0QWRkfS8+XG4gICAgICAgIDxTZWFyY2ggaGFuZGxlSW5wdXRDaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHNldEZpbHRlcmVkU3VibWl0PXt0aGlzLnNldEZpbHRlcmVkU3VibWl0fS8+XG4gICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLnN1Ym1pdHRlZEZpbHRlcn0gdG9nZ2xlV2F0Y2hlZFN0YXRlPXt0aGlzLnRvZ2dsZVdhdGNoZWRTdGF0ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLypcbm5wbSBpbnN0YWxsIGxpdmUtc2VydmVyIC1nICAgICAgICAgIGxpdmUtc2VydmVyXG5ucG0gaW5zdGFsbCAtZyBiYWJlbC1jbGkgICAgICAgICAgICBiYWJlbFxubnBtIHJ1biBidWlsZCAgICAgdG8gcnVuIGJhYmVsXG4qLyJdfQ==