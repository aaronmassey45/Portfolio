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
    <div className="about-info">
      <img src={logo} alt="Aaron Massey" className="bio-image" />
      <div className="bio">
        <h3 className="text-secondary">BIO</h3>
        <p>
          My current focus is in Full Stack Development using the MERN stack
          while working on open source projects and expanding my knowledge in
          testing. Why do I call myself a Full Stack Engineer instead of
          Developer? I worked hard to get my Bachelor&apos;s in Electrical
          Engineering and am going to use it in some capacity. While in college,
          my friend and I were asked by the owner of the apartment complex we
          worked at to build an iOS and Android application for the property so
          I started learning Java. It was then that I knew that after graduating
          I was going to change career fields. I&apos;m currently working on
          personal projects and completing 100 algorithms, read all about it on
          my&nbsp;
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
        </p>
      </div>
      {SKILLS_DATA.map((skill, index) => (
        <Skill skill={skill} index={index} key={skill.title} />
      ))}
    </div>
  </main>
);

export default AboutPage;
