/* eslint-disable import/extensions */
import React from 'react';

import Skill from 'components/Skill';
import logo from 'assets/logo.png';
import SKILLS_DATA from './skills-data';

const AboutPage = () => (
  <main id="about">
    <h1 className="lg-heading">
      About <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">Let me tell you a few things about myself...</h2>
    <section className="about-info">
      <img src={logo} alt="Aaron Massey" className="bio-image" />
      <div className="bio">
        <h3 className="text-secondary">BIO</h3>
        <article>
          Your friendly neighborhood self taught Software Engineer. I have about
          three years total experience, one in the industry mostly working in
          Frontend development using Javascript and ASP.NET. Starting to work on
          more personal projects so I can have something to do during this
          quarantine. Read about all about them on my&nbsp;
          <b>
            <a
              href="https://medium.com/@aaronmassey45"
              target="_blank"
              rel="noopener noreferrer"
            >
              blog
            </a>
          </b>
          !
        </article>
      </div>
      {SKILLS_DATA.map((skill, index) => (
        <Skill skill={skill} index={index} key={skill.title} />
      ))}
    </section>
  </main>
);

export default AboutPage;
