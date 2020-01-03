import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ isMenuShown, toggleMenu }) => {
  const onKeyPress = e => {
    if (e.key === 'Enter') toggleMenu();
  };

  return (
    <div
      className={`menu-btn ${isMenuShown ? 'close' : ''}`}
      onClick={toggleMenu}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
    >
      <div className="btn-line" />
      <div className="btn-line" />
      <div className="btn-line" />
    </div>
  );
};

MenuButton.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MenuButton;
