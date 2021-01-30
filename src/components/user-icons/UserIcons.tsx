import React from 'react';

import SOCIAL_MEDIA_DATA from 'components/user-icons/social-data';

const UserIcons = () => (
  <div className="icons">
    {SOCIAL_MEDIA_DATA.map(({ name, link }) => (
      <a href={link} key={name} target="_blank" rel="noopener noreferrer">
        <i className={`fab fa-${name} fa-2x`} />
      </a>
    ))}
  </div>
);

export default UserIcons;
