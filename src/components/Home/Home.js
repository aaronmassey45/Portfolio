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
          Full Stack Engineer, Dog Whisperer, & Fitness Guru.
        </h2>
        <UserIcons />
      </main>
    );
  }
}
