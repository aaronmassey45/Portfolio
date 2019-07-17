import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ isShown, to, title, toggleMenu }) => {
  return (
    <li className={`nav-item ${isShown && 'show'}`}>
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
};

export default NavItem;
