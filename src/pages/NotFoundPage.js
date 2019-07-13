import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <main>
    <h2 className="lg-heading">
      You don't gotta go{' '}
      <Link to="/" className="text-secondary">
        <u>Home</u>
      </Link>{' '}
      but you shouldn't stay here...
    </h2>
  </main>
);
