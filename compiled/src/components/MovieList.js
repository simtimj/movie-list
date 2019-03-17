import MovieListEntry from './MovieListEntry.js';

var MovieList = props => React.createElement(
  'ul',
  null,
  props.movies.map(movie => React.createElement(MovieListEntry, { key: movie.title, movie: movie }))
);

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJNb3ZpZUxpc3QiLCJwcm9wcyIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFDLE9BQU9BLGNBQVAsTUFBMkIscUJBQTNCOztBQUVELElBQUlDLFlBQWFDLEtBQUQsSUFDZDtBQUFBO0FBQUE7QUFDR0EsUUFBTUMsTUFBTixDQUFhQyxHQUFiLENBQWlCQyxTQUNoQixvQkFBQyxjQUFELElBQWdCLEtBQUtBLE1BQU1DLEtBQTNCLEVBQWtDLE9BQU9ELEtBQXpDLEdBREQ7QUFESCxDQURGOztBQVFBLGVBQWVKLFNBQWYiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCBNb3ZpZUxpc3RFbnRyeSBmcm9tICcuL01vdmllTGlzdEVudHJ5LmpzJ1xuXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDx1bD5cbiAgICB7cHJvcHMubW92aWVzLm1hcChtb3ZpZSA9PlxuICAgICAgPE1vdmllTGlzdEVudHJ5IGtleT17bW92aWUudGl0bGV9IG1vdmllPXttb3ZpZX0gLz5cbiAgICApfVxuICA8L3VsPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7Il19