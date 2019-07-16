import React from 'react';

import Skill from '../../components/Skill';
import logo from '../../assets/logo.png';

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
          while expanding my knowledge in testing and dev ops. Why do I call my
          self an Full Stack Engineer instead of Developer? I worked hard to get
          my Bachelor's in Electrical Engineering and am going to use it in some
          capacity. While working on my EE degree I realized I enjoyed my
          courses where I got to code much more. After graduating I decided to
          change career fields. I'm currently working on personal projects and
          completing 100 algorithms, read all about it on my{' '}
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
