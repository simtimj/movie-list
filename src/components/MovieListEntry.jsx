class MovieListEntry extends React.Component {
  render() {
    return (
      <li id='movieListEntry'>{this.props.movie}</li>
    )
  }
}

export default MovieListEntry;