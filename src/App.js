import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About';
import Projects from './components/Projects/Projects';

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
          </Switch>
          <footer id="main-footer">Copyright &copy; 2018</footer>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
