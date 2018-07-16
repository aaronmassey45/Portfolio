import React, { Fragment } from 'react';

import NavButtons from './NavButtons';
import logo from '../../assets/logo.svg';

export default () => {
  return (
    <Fragment>
      <nav className="white">
        <div className="nav-wrapper container">
          <a className="brand-logo logo">
            <img src={logo} className="responsive-img" alt="logo" />
          </a>
          <a data-target="mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="hide-on-med-and-down right">
            <NavButtons />
          </ul>
        </div>
      </nav>
      <ul className="sidenav black" id="mobile">
        <NavButtons sideNav={true} />
      </ul>
    </Fragment>
  );
};
