import React, { Component } from 'react';

import { HeaderContext } from './Header';

class MenuButton extends Component {
  render() {
    return (
      <HeaderContext.Consumer>
        {props => (
          <div
            className={props.menuBtnClassList.join(' ')}
            onClick={props.toggleMenu}
          >
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
        )}
      </HeaderContext.Consumer>
    );
  }
}

export default MenuButton;
