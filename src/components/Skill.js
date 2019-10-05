import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill, index }) => (
  <div className={`skill skill-${index + 1}`}>
    <h2>{skill.title}</h2>
    {skill.languages && (
      <div>
        <div className="skill__subheader">Languages I Speak</div>
        <div>{skill.languages.join(', ')}</div>
      </div>
    )}
    <div>
      {skill.languages && <div className="skill__subheader">Dev Tools</div>}
      <ul>
        {skill.devTools.map(tool => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </div>
  </div>
);

Skill.propTypes = {
  skill: PropTypes.exact({
    title: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    devTools: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Skill;
