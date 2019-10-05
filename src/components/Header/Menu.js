import React from 'react';
import PropTypes from 'prop-types';

import NavItem from 'components/Header/NavItem';
import FIELDS from 'components/Header/menu-fields';

const Menu = ({ isMenuShown, toggleMenu }) => {
  const showClass = isMenuShown ? 'show' : '';

  return (
    <nav className={`menu ${showClass}`}>
      <div className={`menu-branding ${showClass}`}>
        <div className="portrait" />
      </div>
      <ul className={`menu-nav ${showClass}`}>
        {FIELDS.map(({ title, to }) => (
          <NavItem
            isShown={isMenuShown}
            key={title}
            title={title}
            toggleMenu={toggleMenu}
            to={to}
          />
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
