
var App = () => (
  <div>
    <h1>Movie List</h1>
    <MovieList />
  </div>
)

var MovieList = (props) => (
  <ul>
    <li>{props.movies}</li>
    {/* <li>{props.movies[1]}</li>
    <li>{props.movies[2]}</li>
    <li>{props.movies[3]}</li>
    <li>{props.movies[4]}</li> */}
  </ul>
)

















ReactDOM.render(<App 
  movies={['Mean Girls','Hackers','The Grey',
           'Sunshine','Ex Machina']}/>, 
  document.getElementById('app'))





/*
https://learn.makerpass.com/groups/hrsf114/courses/reactorcore/course.react-components                 components   learn
https://learn.makerpass.com/groups/hrsf114/courses/reactorcore/course.recast.ly                        recast.ly  learn


*/