import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { loginUser } from './Actions/userActions';

import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Routes isLoggedIn={this.props.user.isLoggedIn} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps)(App);