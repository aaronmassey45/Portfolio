import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
          <footer id="main-footer">Aaron Massey &copy; 2018</footer>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
