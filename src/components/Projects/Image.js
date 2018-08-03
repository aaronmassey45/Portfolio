import React, { Component, Fragment } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);

    this.loadedImg = React.createRef();
    this.state = { showBlur: true };
  }

  handleLoad = () => {
    this.loadedImg.current.parentNode.removeChild(this.loadedImg.current);
    this.setState({ showBlur: false });
  };

  render() {
    const { srcLoaded, srcPreload, name } = this.props;

    return (
      <Fragment>
        <img
          src={srcLoaded}
          alt="Invisible loader"
          onLoad={this.handleLoad}
          ref={this.loadedImg}
          style={{ display: 'none' }}
        />

        {this.state.showBlur ? (
          <img src={srcPreload} alt="Blurry" />
        ) : (
          <img src={srcLoaded} alt={name} className="image-fade-in" />
        )}
      </Fragment>
    );
  }
}
