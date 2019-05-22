import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Rank from './components/Rank'
import PersonData from './components/PersonData'
import test from './components/test'
//<Route exact path="/user/:id" component={Article} />
class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/rank" component={Rank} />
          <Route exact path="/persondata" component={PersonData} />
          <Route exact path="/test" component={test} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
