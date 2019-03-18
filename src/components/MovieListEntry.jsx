
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

var MovieListEntry = (props) => (
  <div id='movieListEntry'>
        <p id='movieTitle'>{props.movie.title}{props.id}</p>
        <input id='watched' type="button" value="Watched"></input>
      </div>
)

export default MovieListEntry;