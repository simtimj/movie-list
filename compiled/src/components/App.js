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
      var newMovieObj = { 'title': newMovie };
      this.state.movies.push(newMovieObj);
      this.setState({
        movies: this.state.movies
      });
    }
  }

  // Toggle watched / to watch
  toggle() {
    if (this.state.watched) {
      this.setState({
        watched: false
      });
    } else {
      this.setState({
        watched: true
      });
    }
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiU2VhcmNoIiwiTW92aWVzIiwiQWRkIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJmaWx0ZXJlZCIsInN1Ym1pdHRlZEZpbHRlciIsIndhdGNoZWQiLCJ0b1dhdGNoIiwid2F0Y2hlZExpc3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJzZXRGaWx0ZXJlZFN1Ym1pdCIsInNldEFkZCIsInF1ZXJ5Iiwic2V0U3RhdGUiLCJuZXdNb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJuZXdNb3ZpZSIsInRpdGxlcyIsIm1hcCIsInB1c2giLCJhbGVydCIsIm5ld01vdmllT2JqIiwidG9nZ2xlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixVQUFoQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRUixNQURHO0FBRVhTLGdCQUFVVCxNQUZDO0FBR1hVLHVCQUFpQlYsTUFITjtBQUlYVyxlQUFTLEtBSkU7QUFLWEMsZUFBU1osTUFMRTtBQU1YYSxtQkFBWTtBQU5ELEtBQWI7O0FBU0EsU0FBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsU0FBS0UsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBRCxvQkFBa0JJLEtBQWxCLEVBQXlCO0FBQ3ZCLFNBQUtDLFFBQUwsQ0FBYztBQUNaVCx1QkFBaUIsS0FBS0gsS0FBTCxDQUFXQztBQURoQixLQUFkO0FBR0EsUUFBSVksWUFBWSxLQUFLYixLQUFMLENBQVdDLE1BQVgsQ0FBa0JhLE1BQWxCLENBQXlCQyxTQUN2Q0EsTUFBTUMsS0FBTixDQUFZQyxRQUFaLENBQXFCTixLQUFyQixDQURjLENBQWhCO0FBRUEsUUFBSSxDQUFDRSxVQUFVSyxNQUFmLEVBQXVCO0FBQ3JCTCxrQkFBWSxDQUFDLEVBQUNHLE9BQU8sbUJBQVIsRUFBRCxDQUFaO0FBQ0Q7QUFDRCxTQUFLSixRQUFMLENBQWM7QUFDWlYsZ0JBQVVXO0FBREUsS0FBZDtBQUlEOztBQUVEO0FBQ0FKLHNCQUFvQjtBQUNsQixTQUFLRyxRQUFMLENBQWM7QUFDWlQsdUJBQWlCLEtBQUtILEtBQUwsQ0FBV0U7QUFEaEIsS0FBZDtBQUdEOztBQUVEO0FBQ0FRLFNBQU9TLFFBQVAsRUFBaUI7QUFDZixRQUFJQyxTQUFTLEVBQWI7QUFDQSxTQUFLcEIsS0FBTCxDQUFXQyxNQUFYLENBQWtCb0IsR0FBbEIsQ0FBc0JOLFNBQVM7QUFDN0JLLGFBQU9FLElBQVAsQ0FBWVAsTUFBTUMsS0FBbEI7QUFDRCxLQUZEO0FBR0EsUUFBSUksT0FBT0gsUUFBUCxDQUFnQkUsUUFBaEIsQ0FBSixFQUErQjtBQUM3QkksWUFBTSwwQkFBTjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlDLGNBQWMsRUFBQyxTQUFTTCxRQUFWLEVBQWxCO0FBQ0EsV0FBS25CLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQnFCLElBQWxCLENBQXVCRSxXQUF2QjtBQUNBLFdBQUtaLFFBQUwsQ0FBYztBQUNaWCxnQkFBUSxLQUFLRCxLQUFMLENBQVdDO0FBRFAsT0FBZDtBQUdEO0FBQ0Y7O0FBRUQ7QUFDQXdCLFdBQVM7QUFDUCxRQUFJLEtBQUt6QixLQUFMLENBQVdJLE9BQWYsRUFBd0I7QUFDdEIsV0FBS1EsUUFBTCxDQUFjO0FBQ1pSLGlCQUFTO0FBREcsT0FBZDtBQUdELEtBSkQsTUFJTztBQUNMLFdBQUtRLFFBQUwsQ0FBYztBQUNaUixpQkFBUztBQURHLE9BQWQ7QUFHRDtBQUNGOztBQUVEOztBQUVBc0IsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUUsMEJBQUMsR0FBRCxJQUFLLFFBQVEsS0FBS2hCLE1BQWxCLEdBRkY7QUFHRSwwQkFBQyxNQUFELElBQVEsbUJBQW1CLEtBQUtILGlCQUFoQyxFQUFtRCxtQkFBbUIsS0FBS0UsaUJBQTNFLEdBSEY7QUFJRSwwQkFBQyxTQUFELElBQVcsUUFBUSxLQUFLVCxLQUFMLENBQVdHLGVBQTlCO0FBSkYsS0FERjtBQVFEO0FBbkYrQjs7QUFzRmxDLGVBQWVSLEdBQWY7O0FBR0EiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBNb3ZpZXMgZnJvbSAnLi9Nb3ZpZXMuanMnXG5pbXBvcnQgQWRkIGZyb20gJy4vQWRkLmpzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IE1vdmllcyxcbiAgICAgIGZpbHRlcmVkOiBNb3ZpZXMsXG4gICAgICBzdWJtaXR0ZWRGaWx0ZXI6IE1vdmllcyxcbiAgICAgIHdhdGNoZWQ6IGZhbHNlLFxuICAgICAgdG9XYXRjaDogTW92aWVzLFxuICAgICAgd2F0Y2hlZExpc3Q6W11cbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRGaWx0ZXJlZFN1Ym1pdCA9IHRoaXMuc2V0RmlsdGVyZWRTdWJtaXQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWRkID0gdGhpcy5zZXRBZGQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIFNlYXJjaFxuICAvLyBTZWFyY2ggRmlsdGVyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0ZWRGaWx0ZXI6IHRoaXMuc3RhdGUubW92aWVzXG4gICAgfSlcbiAgICB2YXIgbmV3TW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXMuZmlsdGVyKG1vdmllID0+XG4gICAgICBtb3ZpZS50aXRsZS5pbmNsdWRlcyhxdWVyeSkpXG4gICAgaWYgKCFuZXdNb3ZpZXMubGVuZ3RoKSB7XG4gICAgICBuZXdNb3ZpZXMgPSBbe3RpdGxlOiAnTm8gbW92aWUgaXMgZm91bmQnfV1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJlZDogbmV3TW92aWVzXG4gICAgfSlcblxuICB9XG5cbiAgLy8gU3VibWl0IHNlYXJjaCBmaWx0ZXJcbiAgc2V0RmlsdGVyZWRTdWJtaXQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdWJtaXR0ZWRGaWx0ZXI6IHRoaXMuc3RhdGUuZmlsdGVyZWRcbiAgICB9KVxuICB9XG5cbiAgLy8gU3VibWl0IGFkZCBpbnB1dFxuICBzZXRBZGQobmV3TW92aWUpIHtcbiAgICB2YXIgdGl0bGVzID0gW107XG4gICAgdGhpcy5zdGF0ZS5tb3ZpZXMubWFwKG1vdmllID0+IHtcbiAgICAgIHRpdGxlcy5wdXNoKG1vdmllLnRpdGxlKTtcbiAgICB9KTtcbiAgICBpZiAodGl0bGVzLmluY2x1ZGVzKG5ld01vdmllKSkge1xuICAgICAgYWxlcnQoXCJNb3ZpZSBpcyBhbHJlYWR5IG9uIGxpc3RcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXdNb3ZpZU9iaiA9IHsndGl0bGUnOiBuZXdNb3ZpZX1cbiAgICAgIHRoaXMuc3RhdGUubW92aWVzLnB1c2gobmV3TW92aWVPYmopXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLm1vdmllc1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBUb2dnbGUgd2F0Y2hlZCAvIHRvIHdhdGNoXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS53YXRjaGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2F0Y2hlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3YXRjaGVkOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0b1dhdGNoXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+TW92aWUgTGlzdDwvaDE+XG4gICAgICAgIDxBZGQgc2V0QWRkPXt0aGlzLnNldEFkZH0vPlxuICAgICAgICA8U2VhcmNoIGhhbmRsZUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBzZXRGaWx0ZXJlZFN1Ym1pdD17dGhpcy5zZXRGaWx0ZXJlZFN1Ym1pdH0vPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5zdWJtaXR0ZWRGaWx0ZXJ9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuLypcbm5wbSBpbnN0YWxsIGxpdmUtc2VydmVyIC1nICAgICAgICAgIGxpdmUtc2VydmVyXG5ucG0gaW5zdGFsbCAtZyBiYWJlbC1jbGkgICAgICAgICAgICBiYWJlbFxuXG5ucG0gcnVuIGJ1aWxkICAgICB0byBydW4gYmFiZWxcbiovIl19