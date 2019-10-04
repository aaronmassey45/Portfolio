import React, { useEffect } from 'react';

import UserIcons from 'components/user-icons/UserIcons';

const HomePage = () => {
  useEffect(() => {
    document.body.id = 'bg-img';

    return () => {
      document.body.id = '';
    };
  }, []);

  return (
    <main id="home">
      <h1 className="lg-heading">
        Aaron <span className="text-secondary">Massey</span>
      </h1>
      <h2 className="sm-heading">
        Full Stack Engineer, Dog Whisperer, & Fitness Guru.
      </h2>
      <UserIcons />
    </main>
  );
};

export default HomePage;
