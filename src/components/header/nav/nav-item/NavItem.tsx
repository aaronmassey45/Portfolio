import React from 'react';
import { NavLink } from 'react-router-dom';

interface INavItemProps {
  showClass: string;
  to: string;
  title: string;
  toggleMenu: () => void;
}

const NavItem = ({ showClass, to, title, toggleMenu }: INavItemProps) => (
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

export default NavItem;
