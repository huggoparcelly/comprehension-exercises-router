import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </BrowserRouter>
    );
  }
}

export default App;
