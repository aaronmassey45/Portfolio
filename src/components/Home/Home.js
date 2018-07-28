import React, { Component } from 'react';

import UserIcons from './UserIcons';

export default class extends Component {
  componentDidMount() {
    document.body.id = 'bg-img';
  }

  componentWillUnmount() {
    document.body.id = '';
  }

  render() {
    return (
      <main id="home">
        <h1 className="lg-heading">
          Aaron <span className="text-secondary">Massey</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Programmer, Dog Whisperer, & Fitness Guru.
        </h2>
        <div className="icons">
          <UserIcons />
        </div>
      </main>
    );
  }
}
