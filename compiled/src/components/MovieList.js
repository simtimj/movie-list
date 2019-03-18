import MovieListEntry from './MovieListEntry.js';

var MovieList = props => React.createElement(
  "div",
  { id: "movieListEntry" },
  props.movies.map(movie => React.createElement(MovieListEntry, { movie: movie }))
);

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJNb3ZpZUxpc3QiLCJwcm9wcyIsIm1vdmllcyIsIm1hcCIsIm1vdmllIl0sIm1hcHBpbmdzIjoiQUFBQyxPQUFPQSxjQUFQLE1BQTJCLHFCQUEzQjs7QUFFRCxJQUFJQyxZQUFhQyxLQUFELElBQ2Q7QUFBQTtBQUFBLElBQUssSUFBRyxnQkFBUjtBQUNHQSxRQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUJDLFNBQ2hCLG9CQUFDLGNBQUQsSUFBZ0IsT0FBT0EsS0FBdkIsR0FERDtBQURILENBREY7O0FBUUEsZUFBZUosU0FBZiIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IE1vdmllTGlzdEVudHJ5IGZyb20gJy4vTW92aWVMaXN0RW50cnkuanMnXG5cbnZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IChcbiAgPGRpdiBpZD1cIm1vdmllTGlzdEVudHJ5XCI+XG4gICAge3Byb3BzLm1vdmllcy5tYXAobW92aWUgPT5cbiAgICAgIDxNb3ZpZUxpc3RFbnRyeSBtb3ZpZT17bW92aWV9IC8+XG4gICAgKX1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDsiXX0=