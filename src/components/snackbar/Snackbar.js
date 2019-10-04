import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import './snackbar.styles.scss';

// eslint-disable-next-line arrow-body-style
const Snackbar = ({ message, isShown }) => {
  return ReactDOM.createPortal(
    <div id="snackbar" className={isShown ? 'show' : ''}>
      {message}
    </div>,
    // eslint-disable-next-line comma-dangle
    document.getElementById('snackbar-root')
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
};

export default Snackbar;
