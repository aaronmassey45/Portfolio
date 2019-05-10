import React, { Component } from 'react';

import Project from './Project';
import { PROJECTS } from '../../exports';

const ProjectList = () => (
  <main id="projects">
    <h1 className="lg-heading">
      My <span className="text-secondary">Projects</span>
    </h1>
    <h2 className="sm-heading">Check out some of my projects...</h2>
    <div className="projects">
      {PROJECTS.map(props => (
        <Project {...props} key={props.name} />
      ))}
    </div>
  </main>
);

export default ProjectList;
