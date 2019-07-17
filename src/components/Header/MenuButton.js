import React from 'react';

const MenuButton = ({ isMenuShown, toggleMenu }) => (
  <div
    className={`menu-btn ${isMenuShown ? 'close' : ''}`}
    onClick={toggleMenu}
  >
    <div className="btn-line" />
    <div className="btn-line" />
    <div className="btn-line" />
  </div>
);

export default MenuButton;
