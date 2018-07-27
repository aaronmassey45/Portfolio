import React, { Component } from 'react';

import Menu from './Menu';
import MenuButton from './MenuButton';

export const HeaderContext = React.createContext();

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = () => {
      const {
        menuBtnClassList,
        menuBrandingClassList,
        menuNavClassList,
        menuClassList,
        navItemClassList,
        showMenu,
      } = this.state;

      if (!showMenu) {
        this.setState({
          ...this.state,
          menuBtnClassList: [...menuBtnClassList, 'close'],
          menuBrandingClassList: [...menuBrandingClassList, 'show'],
          menuNavClassList: [...menuNavClassList, 'show'],
          menuClassList: [...menuClassList, 'show'],
          navItemClassList: [...navItemClassList, 'show'],
          showMenu: true,
        });
      } else {
        this.setState({
          ...this.state,
          menuClassList: ['menu'],
          menuBrandingClassList: ['menu-branding'],
          menuBtnClassList: ['menu-btn'],
          menuNavClassList: ['menu-nav'],
          navItemClassList: ['nav-item'],
          showMenu: false,
        });
      }
    };

    this.state = {
      showMenu: false,
      menuClassList: ['menu'],
      menuBrandingClassList: ['menu-branding'],
      menuBtnClassList: ['menu-btn'],
      menuNavClassList: ['menu-nav'],
      navItemClassList: ['nav-item'],
      toggleMenu: this.toggleMenu,
    };
  }

  render() {
    return (
      <HeaderContext.Provider value={this.state}>
        <header>
          <MenuButton />
          <Menu />
        </header>
      </HeaderContext.Provider>
    );
  }
}

export default Header;
