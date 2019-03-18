
class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: [],
      watchedToggle: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    var title = this.props.movie.title;
    if (!this.state.watched.includes(title)) {
      this.state.watched.push(this.props.movie.title);
    }
  }

  render() {
    var toggle = "To Watch";
    return React.createElement(
      'div',
      { id: 'movieListEntry' },
      React.createElement(
        'p',
        { id: 'movieTitle' },
        this.props.movie.id,
        '. ',
        this.props.movie.title
      ),
      React.createElement('input', { id: 'watched', type: 'button', value: toggle, onClick: this.toggle })
    );
  }
}

// var MovieListEntry = (props) => (
//   <div id='movieListEntry'>
//         <p id='movieTitle'>{props.movie.title}{props.id}</p>
//         <input id='watched' type="button" value="Watched"></input>
//       </div>
// )

export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwid2F0Y2hlZCIsIndhdGNoZWRUb2dnbGUiLCJ0b2dnbGUiLCJiaW5kIiwidGl0bGUiLCJtb3ZpZSIsImluY2x1ZGVzIiwicHVzaCIsInJlbmRlciIsImlkIl0sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsY0FBTixTQUE2QkMsTUFBTUMsU0FBbkMsQ0FBNkM7QUFDM0NDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxFQURFO0FBRVhDLHFCQUFlO0FBRkosS0FBYjs7QUFLQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQ7QUFDRDs7QUFJREQsV0FBUztBQUNQLFFBQUlFLFFBQVEsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCRCxLQUE3QjtBQUNBLFFBQUksQ0FBQyxLQUFLTCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJNLFFBQW5CLENBQTRCRixLQUE1QixDQUFMLEVBQXlDO0FBQ3ZDLFdBQUtMLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQk8sSUFBbkIsQ0FBd0IsS0FBS1QsS0FBTCxDQUFXTyxLQUFYLENBQWlCRCxLQUF6QztBQUNEO0FBQ0Y7O0FBRURJLFdBQVM7QUFDUCxRQUFJTixTQUFTLFVBQWI7QUFDQSxXQUNFO0FBQUE7QUFBQSxRQUFLLElBQUcsZ0JBQVI7QUFDRTtBQUFBO0FBQUEsVUFBRyxJQUFHLFlBQU47QUFBb0IsYUFBS0osS0FBTCxDQUFXTyxLQUFYLENBQWlCSSxFQUFyQztBQUFBO0FBQTJDLGFBQUtYLEtBQUwsQ0FBV08sS0FBWCxDQUFpQkQ7QUFBNUQsT0FERjtBQUVFLHFDQUFPLElBQUcsU0FBVixFQUFvQixNQUFLLFFBQXpCLEVBQWtDLE9BQU9GLE1BQXpDLEVBQWlELFNBQVMsS0FBS0EsTUFBL0Q7QUFGRixLQURGO0FBTUQ7QUE3QjBDOztBQWdDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWVSLGNBQWYiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE1vdmllTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3YXRjaGVkOiBbXSxcbiAgICAgIHdhdGNoZWRUb2dnbGU6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICB9XG5cblxuXG4gIHRvZ2dsZSgpIHtcbiAgICB2YXIgdGl0bGUgPSB0aGlzLnByb3BzLm1vdmllLnRpdGxlO1xuICAgIGlmICghdGhpcy5zdGF0ZS53YXRjaGVkLmluY2x1ZGVzKHRpdGxlKSkge1xuICAgICAgdGhpcy5zdGF0ZS53YXRjaGVkLnB1c2godGhpcy5wcm9wcy5tb3ZpZS50aXRsZSk7XG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgdmFyIHRvZ2dsZSA9IFwiVG8gV2F0Y2hcIlxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdtb3ZpZUxpc3RFbnRyeSc+XG4gICAgICAgIDxwIGlkPSdtb3ZpZVRpdGxlJz57dGhpcy5wcm9wcy5tb3ZpZS5pZH0uIHt0aGlzLnByb3BzLm1vdmllLnRpdGxlfTwvcD5cbiAgICAgICAgPGlucHV0IGlkPSd3YXRjaGVkJyB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9e3RvZ2dsZX0gb25DbGljaz17dGhpcy50b2dnbGV9PjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gdmFyIE1vdmllTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4vLyAgIDxkaXYgaWQ9J21vdmllTGlzdEVudHJ5Jz5cbi8vICAgICAgICAgPHAgaWQ9J21vdmllVGl0bGUnPntwcm9wcy5tb3ZpZS50aXRsZX17cHJvcHMuaWR9PC9wPlxuLy8gICAgICAgICA8aW5wdXQgaWQ9J3dhdGNoZWQnIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIldhdGNoZWRcIj48L2lucHV0PlxuLy8gICAgICAgPC9kaXY+XG4vLyApXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdEVudHJ5OyJdfQ==