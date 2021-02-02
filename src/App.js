import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Posts from './Posts';
import Todos from './Todos';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/posts"  >
            <Posts />
          </Route>
          <Route path="/todos" >
            <Todos />
          </Route>
          <Route path="/" >
            <div>
              <Link to="/todos">
                Go to Todos
            </Link>
            </div>
            <div>
              <Link to="/posts">
                Go to Posts
            </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
