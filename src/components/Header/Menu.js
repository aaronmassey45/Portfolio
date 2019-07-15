import React from 'react';
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
    title: 'Contact',
  },
];

const Menu = props => (
  <HeaderContext.Consumer>
    {context => (
      <nav className={context.menuClassList.join(' ')}>
        <div className={context.menuBrandingClassList.join(' ')}>
          <div className="portrait" />
        </div>
        <ul className={context.menuNavClassList.join(' ')}>
          {FIELDS.map(({ to, title }) => {
            const classList = [...context.navItemClassList];
            if (props.location.pathname === to && 'current') {
              classList.push('current');
            }
            return (
              <li className={classList.join(' ')} key={title}>
                <Link to={to} className="nav-link" onClick={context.toggleMenu}>
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

export default withRouter(Menu);
