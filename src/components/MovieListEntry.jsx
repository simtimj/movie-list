
class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watched: [],
      watchedToggle: false
    }

    this.toggle = this.toggle.bind(this);
  }



  toggle() {
    var title = this.props.movie.title;
    if (!this.state.watched.includes(title)) {
      this.state.watched.push(this.props.movie.title);
    }
  }
  
  render() {
    var toggle = "To Watch"
    return (
      <div id='movieListEntry'>
        <p id='movieTitle'>{this.props.movie.id}. {this.props.movie.title}</p>
        <input id='watched' type="button" value={toggle} onClick={this.toggle}></input>
      </div>
    )
  }
}

// var MovieListEntry = (props) => (
//   <div id='movieListEntry'>
//         <p id='movieTitle'>{props.movie.title}{props.id}</p>
//         <input id='watched' type="button" value="Watched"></input>
//       </div>
// )

export default MovieListEntry;