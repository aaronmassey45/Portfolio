import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    name: 'project1',
    img: require('../../assets/project1.jpg'),
    to: '/projects/#',
  },
  {
    name: 'project2',
    img: require('../../assets/project2.jpg'),
    to: '/projects/#',
  },
  {
    name: 'project3',
    img: require('../../assets/project3.jpg'),
    to: '/projects/#',
  },
  {
    name: 'project4',
    img: require('../../assets/project4.jpg'),
    to: '/projects/#',
  },
  {
    name: 'project5',
    img: require('../../assets/project5.jpg'),
    to: '/projects/#',
  },
];

export default class extends Component {
  renderProjects = () => {
    return PROJECTS.map(({ name, img, to }) => (
      <div className="items" key={name}>
        <Link to={to}>
          <img src={img} alt="Project" />
        </Link>
        <Link to={to} className="btn-light">
          <i className="fas fa-eye" /> {name}
        </Link>
        <Link to={to} className="btn-dark">
          <i className="fab fa-github" /> GitHub
        </Link>
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
