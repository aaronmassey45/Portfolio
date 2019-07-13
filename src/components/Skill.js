import React from 'react';

const Skill = ({ skill, index }) => {
  return (
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
};

export default Skill;
