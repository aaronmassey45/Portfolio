import React, { Component } from 'react';
import logo from '../assets/portrait.jpg';

export default class extends Component {
  componentDidMount() {
    document.body.id = '';
  }

  render() {
    return (
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>.
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img src={logo} alt="Aaron Massey" className="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Why do I say Engineer instead of Developer? Because I worked hard
              to get my Electrical Engineering degree and am going to use it in
              some capacity! I've always had a passion to create and while
              getting my EE degree, I realized that coding scratched that itch
              better! I'm currently working on a 100 Algorithm challenge, read
              all about it on my{' '}
              <a href="https://medium.com/@aaronmassey45">blog</a>! Outside of
              developing I have a beautiful girlfriend, a handsome son, and two
              good ole puppers. I'd love to get coffee and get to know you, so
              don’t hesitate to get in touch.
            </p>
          </div>
          <div className="job job-1">
            <h3>123 Web Shop</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dignissimos assumenda pariatur! Esse quod minima enim eveniet sed
              nisi vel?
            </p>
          </div>
          <div className="job job-2">
            <h3>Design Squad</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dignissimos assumenda pariatur! Esse quod minima enim eveniet sed
              nisi vel?
            </p>
          </div>
          <div className="job job-3">
            <h3>Yard Sale</h3>
            <h6>Cashier</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dignissimos assumenda pariatur! Esse quod minima enim eveniet sed
              nisi vel?
            </p>
          </div>
        </div>
      </main>
    );
  }
}
