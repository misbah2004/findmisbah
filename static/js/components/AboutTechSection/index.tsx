import React from 'react';
import { PropsAboutSection } from '../../@types/props';

const AboutTechSection: React.FC<PropsAboutSection> = ({
  title,
  skills,
  border,
}) => {
  return (
    <div className={`sec pb-4 mb-4 ${border ? 'border-b-gray border-b' : ''}`}>
      <h2 className="text-sm mb-4">{title}</h2>
      <ul>
        {skills.map((skill, i) => (
          <li
            key={i}
            className="text-xs flex justify-between items-center py-2"
          >
            {skill.name} <skill.icon />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTechSection;
