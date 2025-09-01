import React from 'react';
import style from './style.module.scss';

const Footer = () => {
  const date = new Date();
  return (
    <footer
      className={`${style._footer} p-4 flex justify-center xl:justify-between flex-wrap`}
    >
      <div className="mb-2 xl:mb-0">© {date.getFullYear()} All Rights Reserved.</div>
      <a
        href="mailto:MisbahUlHassan@protonmail.com"
        className="text-secondary"
      >
        MisbahUlHassan@protonmail.com
      </a>
    </footer>
  );
};

export default Footer;
