import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from './Image';
import { PROJECTS } from '../../exports';

export default class extends Component {
  renderProjects = () => {
    return PROJECTS.map(({ name, img, preload, to, github }) => (
      <div className="items" key={name}>
        <Link to={to}>
          <Image srcPreload={preload} srcLoaded={img} name={name} />
        </Link>
        <Link to={to} className="btn-light">
          <i className="fas fa-eye" /> {name}
        </Link>
        <a href={github} target="_blank" className="btn-dark">
          <i className="fab fa-github" /> GitHub
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
