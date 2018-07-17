import React, { Component } from 'react';

const style = {
  menuBtn: { position: 'fixed', top: 0, right: '16px' },
  img: { maxHeight: 250 },
  whiteText: {
    color: '#fff',
  },
};

export default class Header extends Component {
  render() {
    return (
      <header className="card-panel black mt-0 z-depth-2 white-text">
        <div className="container">
          <h4>
            Hello, my name is <span className="saints-gold">Aaron</span>. I'm a
            self-taught <span className="saints-gold">Full Stack Engineer</span>{' '}
            living in <span className="saints-gold">San Antonio, TX</span>.
          </h4>
          <img
            src="https://i.imgur.com/rXD35vk.png"
            alt="Avatar"
            className="circle responsive-img center-block"
            style={style.img}
          />
        </div>
      </header>
    );
  }
}
