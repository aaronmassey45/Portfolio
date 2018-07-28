import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  componentDidMount() {
    document.body.id = '';
  }

  render() {
    return (
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>.
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email</span>{' '}
            cliffordaaronmassey@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone</span> 1234567890
          </div>
          <div>
            <span className="text-secondary">Address</span> 123 Suwoop Dr.,
            Cali, California
          </div>
        </div>
      </main>
    );
  }
}
