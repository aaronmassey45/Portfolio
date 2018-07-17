import React, { Component } from 'react';

import { Header, About, Navbar } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
