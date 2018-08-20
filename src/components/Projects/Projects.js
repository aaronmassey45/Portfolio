import React, { Component } from 'react';

import Image from './Image';
import { PROJECTS } from '../../exports';

export default class extends Component {
  renderProjects = () => {
    return PROJECTS.map(({ name, img, preload, to, github }) => (
      <div className="items" key={name}>
        <a href={to} target="_blank">
          <Image srcPreload={preload} srcLoaded={img} name={name} />
        </a>
        <a href={to} target="_blank" className="btn-light">
          <i className="fas fa-eye" /> {name} | Demo
        </a>
        <a href={github} target="_blank" className="btn-dark">
          <i className="fab fa-github" /> View on GitHub
        </a>
      </div>
    ));
  };

  render() {
    return (
      <main id="projects">
        <h1 className="lg-heading">
          My <span className="text-secondary">Projects</span>.
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">{this.renderProjects()}</div>
      </main>
    );
  }
}
