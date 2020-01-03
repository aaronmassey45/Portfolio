import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ showClass, to, title, toggleMenu }) => (
  <li className={`nav-item ${showClass}`.trim()}>
    <NavLink
      activeClassName="current"
      to={to}
      className="nav-link"
      onClick={toggleMenu}
      exact
    >
      {title}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  showClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default NavItem;
