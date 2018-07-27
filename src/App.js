import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { About, Navbar } from './components';
import Header from './components/Header/Header';
import Main from './components/MainContent/Main';

const Home = () => (
  <Fragment>
    <Header />
    <Main />
  </Fragment>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
