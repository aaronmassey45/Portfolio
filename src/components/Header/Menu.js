import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

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
                const classList = [...props.navItemClassList];
                if (this.props.location.pathname === to && 'current') {
                  classList.push('current');
                }
                return (
                  <li className={classList.join(' ')} key={title}>
                    <Link to={to} className="nav-link">
                      {title}
                    </Link>
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

export default withRouter(Menu);
