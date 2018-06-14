import React from 'react';

const style = {
  navLink: {
    fontSize: 'xx-large',
    float: 'none',
    display: 'inline-flex',
    margin: '0 .4em',
  },
  sideNav: {
    fontSize: 'large',
    margin: '.5em 0',
    color: '#fff',
  },
};

export default ({ sideNav }) => {
  const navStyles = sideNav ? style.sideNav : style.navLink;
  return (
    <React.Fragment>
      <li style={navStyles}>
        <a href="/">about me</a>
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
    </React.Fragment>
  );
};
