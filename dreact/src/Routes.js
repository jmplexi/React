import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './Components/about/About.js'
import Home from './Components/home/Home.js'
import Login from './Components/user/Login.js'
import Logout from './Components/user/Logout.js'
import Register from './Components/user/Register.js'

const Routes = (props) => (
  <Router className="nav">
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {props.isLoggedIn || <Link to="/login">Login</Link>}
        </li>
        <li>
          {!props.isLoggedIn || <Link to="/logout">Logout</Link>}
        </li>
        <li>
          {props.isLoggedIn || <Link to="/register">Register</Link>}
        </li>
      </ul >

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" component={Register} />
    </div >
  </Router >
);

export default Routes;