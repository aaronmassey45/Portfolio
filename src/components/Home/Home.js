import React from 'react';

import UserIcons from './UserIcons';

export default () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Aaron <span className="text-secondary">Massey</span>
      </h1>
      <h2 className="sm-heading">
        Web Developer, Programmer, Dog Whisperer, & Fitness Guru.
      </h2>
      <div className="icons">
        <UserIcons />
      </div>
    </main>
  );
};
