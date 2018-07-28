import React from 'react';

import { SOCIAL } from '../../exports';

export default () => {
  return (
    <div>
      {SOCIAL.map(({ name, link }) => {
        return (
          <a href={link} key={name} target="_blank">
            <i className={`fab fa-${name} fa-2x`} />
          </a>
        );
      })}
    </div>
  );
};
