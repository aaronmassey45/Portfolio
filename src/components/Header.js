import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min';

import NavButtons from './NavButtons';

const style = {
  menuBtn: { position: 'fixed', top: 0, right: '16px' },
  img: { maxHeight: 250 },
  whiteText: {
    color: '#fff',
  },
};

export default class Header extends Component {
  componentDidMount() {
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    });
  }

  render() {
    return (
      <header className="card-panel blue-grey mt-0 z-depth-3">
        <div className="container center">
          <img
            src="https://i.imgur.com/rXD35vk.png"
            alt="Avatar"
            className="circle responsive-img center-block"
            style={style.img}
          />
          <h4 style={style.whiteText}>Aaron Massey</h4>
          <h5>
            <span className="title amber" style={style.whiteText}>
              Full-Stack Web Engineer
            </span>
          </h5>
        </div>
        <nav className="blue-grey z-depth-0">
          <div className="nav-wrapper">
            <a
              data-target="mobile"
              className="sidenav-trigger"
              style={style.menuBtn}
            >
              <i className="material-icons">menu</i>
            </a>
            <ul className="hide-on-med-and-down center">
              <NavButtons />
            </ul>
          </div>
        </nav>

        <ul className="sidenav blue-grey" id="mobile">
          <NavButtons sideNav={true} />
        </ul>
      </header>
    );
  }
}
