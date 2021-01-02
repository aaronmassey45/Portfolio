import React from 'react';

interface ToggleNavBtnProps {
  isMenuShown: boolean;
  toggleMenu: () => void,
}

const ToggleNavBtn = ({ isMenuShown, toggleMenu }: ToggleNavBtnProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') toggleMenu();
  };

  return (
    <div
      className={`menu-btn ${isMenuShown ? 'close' : ''}`}
      onClick={toggleMenu}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <div className="btn-line" />
      <div className="btn-line" />
      <div className="btn-line" />
    </div>
  );
};

export default ToggleNavBtn;
