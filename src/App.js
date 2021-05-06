import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import StrictAccess from './components/StrictAccess';
import Users from './components/Users';


const user = {
  username: 'joao',
  password: '1234'
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/users/:id" render={ (props) =>
          <Users {...props} greetingMessage='Good Morning'/>
        }   
        />
        <Route path="/strict-access" render={ (props) =>
          <StrictAccess {...props} user={ user }/>
        }
        />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/strict-access">Strict Access</Link></li>
        </ul>
      </nav>
      </BrowserRouter>
    );
  }
}

export default App;
