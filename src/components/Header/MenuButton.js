import React from 'react';

import { HeaderContext } from './Header';

const MenuButton = () => (
  <HeaderContext.Consumer>
    {context => (
      <div
        className={context.menuBtnClassList.join(' ')}
        onClick={context.toggleMenu}
      >
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>
    )}
  </HeaderContext.Consumer>
);

export default MenuButton;
