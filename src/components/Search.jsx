
class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickInputChange = this.handleClickInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showWatched = this.showWatched.bind(this);
    this.showToWatch = this.showToWatch.bind(this);
  }

  // Search input
  handleClickInputChange(e) {
    var query = e.target.value
    this.props.handleInputChange(query);
  }
  // Search submit
  handleSubmit() {
    this.props.setFilteredSubmit();
  }

  showWatched() {
    
  }

  showToWatch(){

  }


  render() {
    return (
      <div id='searchRow'>
        <input type='button' value='Watched' onClick={this.showWatched}></input>
        <input type='button' value='To Watch' onClick={this.showToWatch}></input>
        <input placeholder="Search..." onChange={this.handleClickInputChange}></input>
        <input type='submit' onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

export default Search;