import React, { Component } from 'react';

import { HeaderContext } from './Header';

const FIELDS = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about',
    title: 'About Me',
  },
  {
    to: '/projects',
    title: 'Projects',
  },
  {
    to: '/contact',
    title: 'How To Reach Me',
  },
];

class Menu extends Component {
  renderFields = () => {};

  render() {
    return (
      <HeaderContext.Consumer>
        {props => (
          <nav className={props.menuClassList.join(' ')}>
            <div className={props.menuBrandingClassList.join(' ')}>
              <div className="portrait" />
            </div>
            <ul className={props.menuNavClassList.join(' ')}>
              {FIELDS.map(({ to, title }) => {
                return (
                  <li className={props.navItemClassList.join(' ')} key={title}>
                    <a href={to} className="nav-link">
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </HeaderContext.Consumer>
    );
  }
}

export default Menu;
