
class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickInputChange = this.handleClickInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickInputChange(e) {
    var query = e.target.value
    this.props.handleInputChange(query);
  }

  handleSubmit() {
    this.props.setFilteredSubmit();
  }

  render() {
    return (
      <div id='searchRow'>
        <input placeholder="Search..." onChange={this.handleClickInputChange}></input>
        <input type='submit' onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

export default Search;