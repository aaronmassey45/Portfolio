import React, { Component } from 'react';

import { About, Navbar } from './components';
import Header from './components/Header/Header';
import Main from './components/MainContent/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
