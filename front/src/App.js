import './App.css';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

//import Dashboard from './dashboard'
import Login from './user/login'
import Signup from './user/signup'
import DataTable from './dataTable';

function App() {
  return (
    <div className="App">
    <Router>
      
                <ul className="nav justify-content-center mb-4">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="SignUp" className="nav-link">SignUp</Link>
                    </li>
                </ul>

            <Switch>                
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="Login" >
                    <Login />
                </Route>
                <Route path="/Dashboard">
                   <DataTable />
                </Route>
                <Route path="/SignUp">
                    <Signup />
                </Route>
            </Switch>

        </Router>
     </div>
  );
}

export default App;
