import React from 'react';

import SOCIAL_MEDIA_DATA from './social-data';

export default () => {
  return (
    <div className="icons">
      {SOCIAL_MEDIA_DATA.map(({ name, link }) => {
        return (
          <a href={link} key={name} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${name} fa-2x`} />
          </a>
        );
      })}
    </div>
  );
};
