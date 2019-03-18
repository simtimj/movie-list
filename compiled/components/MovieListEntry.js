
class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      { id: 'movieListEntry' },
      React.createElement(
        'p',
        { id: 'movieTitle' },
        props.movie.title,
        props.id
      ),
      React.createElement('input', { id: 'watched', type: 'button', value: 'Watched' })
    );
  }
}

export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm1vdmllIiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLGNBQU4sU0FBNkJDLE1BQU1DLFNBQW5DLENBQTZDO0FBQzNDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDRDs7QUFFREMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssSUFBRyxnQkFBUjtBQUNFO0FBQUE7QUFBQSxVQUFHLElBQUcsWUFBTjtBQUFvQkQsY0FBTUUsS0FBTixDQUFZQyxLQUFoQztBQUF1Q0gsY0FBTUk7QUFBN0MsT0FERjtBQUVFLHFDQUFPLElBQUcsU0FBVixFQUFvQixNQUFLLFFBQXpCLEVBQWtDLE9BQU0sU0FBeEM7QUFGRixLQURGO0FBTUQ7QUFaMEM7O0FBZTdDLGVBQWVSLGNBQWYiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE1vdmllTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0nbW92aWVMaXN0RW50cnknPlxuICAgICAgICA8cCBpZD0nbW92aWVUaXRsZSc+e3Byb3BzLm1vdmllLnRpdGxlfXtwcm9wcy5pZH08L3A+XG4gICAgICAgIDxpbnB1dCBpZD0nd2F0Y2hlZCcgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiV2F0Y2hlZFwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0RW50cnk7Il19