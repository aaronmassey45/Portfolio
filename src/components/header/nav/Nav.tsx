import React, { useMemo } from 'react';

import FIELDS from 'components/header/nav/nav-fields';
import NavItem from 'components/header/nav/nav-item/NavItem';

interface INavProps {
  isMenuShown: boolean;
  toggleMenu: () => void,
}

const Nav = ({ isMenuShown, toggleMenu }: INavProps) => {
  const showClass = isMenuShown ? 'show' : '';

  const navItems = useMemo(
    () => FIELDS.map(({ title, to }) => (
      <NavItem
        showClass={showClass}
        key={title}
        title={title}
        toggleMenu={toggleMenu}
        to={to}
      />
    )),
    [showClass],
  );

  return (
    <nav className={`menu ${showClass}`.trim()}>
      <div className={`menu-branding ${showClass}`.trim()}>
        <div className="portrait" />
      </div>
      <ul className={`menu-nav ${showClass}`.trim()}>{navItems}</ul>
    </nav>
  );
};

export default Nav;
