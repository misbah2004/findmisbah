import React, { useRef, useContext, useState } from 'react';
import { NavigationContext } from '../../context/navigation.context';
import type { PropsRSideNavbar } from '../../@types/props';
import HamburgerBtn from '../HamburgerBtn';
import style from './style.module.scss';

const RSideNavbar = ({ toggleFunction }: PropsRSideNavbar) => {
  const navRef = useRef<HTMLElement>(null);
  const [csStyleClass, setCsStyleClass] = useState<string>('');
  const { inViewText } = useContext(NavigationContext);
  const onClickHandler = () => {
    navRef.current?.classList.toggle(style.active);
    document.getElementById('__open_r_menu')?.classList.toggle(csStyleClass);
    toggleFunction();
  };
  return (
    <nav ref={navRef} className={`bg-secondBase ${style.nav}`}>
      <HamburgerBtn
        toggle={(csStyle: string) => {
          if (csStyleClass === '') {
            setCsStyleClass(csStyle);
          }
          navRef.current?.classList.toggle(style.active);
          toggleFunction();
        }}
      />
      <div className={style.active_url_view}>
        <a
          href="/"
          className={`text-gray hover:text-white transition-colors text-sm ${style.active_anchor}`}
        >
          {inViewText}
        </a>
        <ul className={`flex-1 pl-8 ${style.ul_menu}`}>
          <li className="mb-4">
            <a
              href="/"
              className="text-gray hover:text-white transition-colors text-sm"
            >
              Home
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#home"
              className="text-gray hover:text-white transition-colors text-sm"
              onClick={onClickHandler}
            >
              About
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#projects"
              className="text-gray hover:text-white transition-colors text-sm"
              onClick={onClickHandler}
            >
              Projects
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#services"
              className="text-gray hover:text-white transition-colors text-sm"
              onClick={onClickHandler}
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default RSideNavbar;
