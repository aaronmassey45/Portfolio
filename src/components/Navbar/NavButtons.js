import React, { Fragment } from 'react';

const style = {
  sideNav: {
    fontSize: 'large',
    margin: '.5em 0',
    color: '#fff',
  },
};

export default ({ sideNav }) => {
  const navStyles = sideNav ? style.sideNav : {};
  return (
    <Fragment>
      <li style={navStyles}>
        <a href="/">about</a>
      </li>
      <li style={navStyles}>
        <a href="/">180 days of code</a>
      </li>
      <li style={navStyles}>
        <a href="/">contact</a>
      </li>
      <li style={navStyles}>
        <a href="/">resources</a>
      </li>
    </Fragment>
  );
};
