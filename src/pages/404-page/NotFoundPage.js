import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <main>
    <h2 className="lg-heading">
      You don&apos;t gotta go{' '}
      <Link to="/" className="text-secondary">
        <u>Home</u>
      </Link>{' '}
      but you shouldn&apos;t stay here...
    </h2>
  </main>
);

export default NotFoundPage;
