class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }  

    this.handleClickInputChange = this.handleClickInputChange.bind(this);
  }

  handleClickInputChange(e) {
    this.props.handleInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div id='searchRow'>
        <input placeholder="Search..."
               onChange={this.handleClickInputChange}></input>
        <button>Go!</button>
      </div>
    )
  }
}

export default Search;