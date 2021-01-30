import React from 'react';
import ReactDOM from 'react-dom';

import './snackbar.styles.scss';

interface ISnackbarProps {
  isShown: boolean;
  message: string;
}

// eslint-disable-next-line arrow-body-style
const Snackbar = ({ message, isShown }: ISnackbarProps) => {
  return ReactDOM.createPortal(
    <div id="snackbar" className={isShown ? 'show' : ''}>
      {message}
    </div>,
    // eslint-disable-next-line comma-dangle
    document.getElementById('snackbar-root')
  );
};

export default Snackbar;
