import React, { useState } from 'react';

import Nav from 'components/header/nav/Nav';
import ToggleNavBtn from 'components/header/toggle-nav-btn/ToggleNavBtn';

const Header = () => {
  const [isMenuShown, setShownState] = useState(false);

  const toggleMenu = () => {
    setShownState(!isMenuShown);
  };

  return (
    <header>
      <ToggleNavBtn isMenuShown={isMenuShown} toggleMenu={toggleMenu} />
      <Nav isMenuShown={isMenuShown} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
