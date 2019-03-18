
class Add extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newMovie: ''
    }

    this.handleAddInput = this.handleAddInput.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleAddInput(e) {
    this.state.newMovie = e.target.value;
  }

  handleAddSubmit() {
    this.props.setAdd(this.state.newMovie);
  }

  render() {
    return (
      <div id='add'>
        <input type='text' placeholder='Add Movie title here' onChange={this.handleAddInput}></input>
        <input type='submit' value='Add' onClick={this.handleAddSubmit}></input>
      </div>
    )
  }
}



export default Add;

