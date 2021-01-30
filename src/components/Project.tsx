import React from 'react';
import Lazyload from 'react-lazyload';

interface IProjectProps {
  img: string;
  preload: string;
  name: string;
  to: string;
  github: string;
}

const Project = ({ img, preload, name, to, github }: IProjectProps) => (
  <div id={name}>
    <a href={to} target="_blank" rel="noopener noreferrer">
      <Lazyload
        height="100%"
        offset={100}
        once
        placeholder={<img src={preload} alt={`Blurred ${name}`} />}
      >
        <img src={img} alt={name} className="image-fade-in" />
      </Lazyload>
    </a>
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-light"
    >
      <i className="fas fa-eye" /> {name} | Demo
    </a>
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-dark"
    >
      <i className="fab fa-github" /> View on GitHub
    </a>
  </div>
);

export default Project;
