import React from 'react';

const SOCIAL = [
  {
    name: 'linkedin',
    link: '#',
  },
  {
    name: 'instagram',
    link: '#',
  },
  {
    name: 'medium',
    link: '#',
  },
  {
    name: 'github',
    link: '#',
  },
];

export default () => {
  return (
    <div>
      {SOCIAL.map(({ name, link }) => {
        return (
          <a href={link} key={name}>
            <i className={`fab fa-${name} fa-2x`} />
          </a>
        );
      })}
    </div>
  );
};
