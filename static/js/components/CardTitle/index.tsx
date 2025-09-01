import React from 'react';

export type CardTitleProps = {
  title: string;
};

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return (
    <h1 className="text-lg font-semibold tracking-wider mb-8 text-center xl:text-left">
      {title}
    </h1>
  );
};

export default CardTitle;
