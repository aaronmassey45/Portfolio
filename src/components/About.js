import React, { Component } from 'react';
import logo from '../assets/portrait.jpg';

import { SKILLS } from '../exports';

export default class extends Component {
  renderSkills = () => {
    return SKILLS.map((skill, i) => {
      return (
        <div className={`skill skill-${i + 1}`} key={skill.title}>
          <h2>{skill.title}</h2>
          {skill.languages && (
            <div>
              <div className="skill__subheader">Languages I Speak</div>
              <div>{skill.languages.join(', ')}</div>
            </div>
          )}
          <div>
            {skill.languages && (
              <div className="skill__subheader">Dev Tools</div>
            )}
            <ul>{skill.devTools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </div>
        </div>
      );
    });
  };

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
              some capacity! While working on my EE degree I realized the coding
              aspect better scratched my itch to create. I'm currently working
              on a 100 Algorithm challenge, read all about it on my{' '}
              <b>
                <a href="https://medium.com/@aaronmassey45">blog</a>
              </b>! Outside of developing I have a beautiful girlfriend, a
              handsome son, and two good ole puppers.
            </p>
          </div>
          {this.renderSkills()}
        </div>
      </main>
    );
  }
}
