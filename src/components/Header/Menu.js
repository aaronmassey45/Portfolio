import React from 'react';

import NavItem from './NavItem';
import FIELDS from './menu-fields';

const Menu = ({ isMenuShown, toggleMenu }) => {
  const showClass = isMenuShown ? 'show' : '';

  return (
    <nav className={`menu ${showClass}`}>
      <div className={`menu-branding ${showClass}`}>
        <div className="portrait" />
      </div>
      <ul className={`menu-nav ${showClass}`}>
        {FIELDS.map(props => (
          <NavItem
            isShown={isMenuShown}
            toggleMenu={toggleMenu}
            {...props}
            key={props.title}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
