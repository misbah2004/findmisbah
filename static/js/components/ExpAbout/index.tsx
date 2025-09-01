import React from 'react';
import type { PropsExpAbout } from '../../@types/props';

const ExpAbout: React.FC<PropsExpAbout> = ({ highlight, text }) => {
  return (
    <p className="flex-1 text-center xl:text-left">
      <span className="text-secondary text-lg align-middle mr-2">
        {highlight}
      </span>
      {text}
    </p>
  );
};
export default ExpAbout;
