import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Creative from './components/Creative';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contactme' component={ContactMe} />
          <Route exact path='/creative' component={Creative} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
