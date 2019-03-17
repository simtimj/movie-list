
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleClickInputChange = this.handleClickInputChange.bind(this);
  }

  handleClickInputChange(e) {
    this.props.handleInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return React.createElement(
      'div',
      { id: 'searchRow' },
      React.createElement('input', { placeholder: 'Search...', onChange: this.handleClickInputChange }),
      React.createElement(
        'button',
        null,
        'Go!'
      )
    );
  }
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrSW5wdXRDaGFuZ2UiLCJiaW5kIiwiZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxNQUFOLFNBQXFCQyxNQUFNQyxTQUEzQixDQUFxQztBQUNuQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjs7QUFJQSxTQUFLQyxzQkFBTCxHQUE4QixLQUFLQSxzQkFBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBOUI7QUFDRDs7QUFFREQseUJBQXVCRSxDQUF2QixFQUEwQjtBQUN4QixTQUFLTCxLQUFMLENBQVdNLGlCQUFYLENBQTZCRCxFQUFFRSxNQUFGLENBQVNMLEtBQXRDO0FBQ0EsU0FBS00sUUFBTCxDQUFjO0FBQ1pOLGFBQU9HLEVBQUVFLE1BQUYsQ0FBU0w7QUFESixLQUFkO0FBR0Q7O0FBRURPLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsV0FBUjtBQUNFLHFDQUFPLGFBQVksV0FBbkIsRUFBK0IsVUFBVSxLQUFLTixzQkFBOUMsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixLQURGO0FBTUQ7QUF6QmtDOztBQTRCckMsZUFBZVAsTUFBZiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfSAgXG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUNsaWNrSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J3NlYXJjaFJvdyc+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNsaWNrSW5wdXRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24+R28hPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdfQ==