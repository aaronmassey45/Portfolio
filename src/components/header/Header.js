import React, { useState } from 'react';

import Menu from 'components/Header/Menu';
import MenuButton from 'components/Header/MenuButton';

const Header = () => {
  const [isMenuShown, setShownState] = useState(false);

  const toggleMenu = () => {
    setShownState(!isMenuShown);
  };

  return (
    <header>
      <MenuButton isMenuShown={isMenuShown} toggleMenu={toggleMenu} />
      <Menu isMenuShown={isMenuShown} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;