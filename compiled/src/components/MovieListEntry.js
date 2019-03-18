
// class MovieListEntry extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div id='movieListEntry'>
//         <p id='movieTitle'>{props.movie.title}{props.id}</p>
//         <input id='watched' type="button" value="Watched"></input>
//       </div>
//     )
//   }
// }

var MovieListEntry = props => React.createElement(
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

export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwibW92aWUiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLGlCQUFrQkMsS0FBRCxJQUNuQjtBQUFBO0FBQUEsUUFBSyxJQUFHLGdCQUFSO0FBQ007QUFBQTtBQUFBLGNBQUcsSUFBRyxZQUFOO0FBQW9CQSxrQkFBTUMsS0FBTixDQUFZQyxLQUFoQztBQUF1Q0Ysa0JBQU1HO0FBQTdDLE9BRE47QUFFTSxxQ0FBTyxJQUFHLFNBQVYsRUFBb0IsTUFBSyxRQUF6QixFQUFrQyxPQUFNLFNBQXhDO0FBRk4sQ0FERjs7QUFPQSxlQUFlSixjQUFmIiwiZmlsZSI6Ik1vdmllTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBjbGFzcyBNb3ZpZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgaWQ9J21vdmllTGlzdEVudHJ5Jz5cbi8vICAgICAgICAgPHAgaWQ9J21vdmllVGl0bGUnPntwcm9wcy5tb3ZpZS50aXRsZX17cHJvcHMuaWR9PC9wPlxuLy8gICAgICAgICA8aW5wdXQgaWQ9J3dhdGNoZWQnIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIldhdGNoZWRcIj48L2lucHV0PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbnZhciBNb3ZpZUxpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGlkPSdtb3ZpZUxpc3RFbnRyeSc+XG4gICAgICAgIDxwIGlkPSdtb3ZpZVRpdGxlJz57cHJvcHMubW92aWUudGl0bGV9e3Byb3BzLmlkfTwvcD5cbiAgICAgICAgPGlucHV0IGlkPSd3YXRjaGVkJyB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJXYXRjaGVkXCI+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3RFbnRyeTsiXX0=