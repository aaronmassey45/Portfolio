import React from 'react';

import Project from '../../components/Project';

import PROJECTS_DATA from './projects-data';

const ProjectsPage = () => (
  <main id="projects">
    <h1 className="lg-heading">
      My <span className="text-secondary">Projects</span>
    </h1>
    <h2 className="sm-heading">Check out some of my projects...</h2>
    <div className="projects">
      {PROJECTS_DATA.map(props => (
        <Project {...props} key={props.name} />
      ))}
    </div>
  </main>
);

export default ProjectsPage;
