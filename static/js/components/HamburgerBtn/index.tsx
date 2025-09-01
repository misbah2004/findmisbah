import React from 'react';
import style from './style.module.scss';
import type { PropsHamburgerBtn } from '../../@types/props';
const HamburgerBtn: React.FC<PropsHamburgerBtn> = ({ toggle }) => {
  return (
    <div className={style.hamburger_btn}>
      <button
        onClick={(e) => {
          //   console.log(e.target);
          e.currentTarget.classList.toggle(style.active);
          toggle(style.active);
        }}
        id="__open_r_menu"
      >
        <span></span>
      </button>
    </div>
  );
};

export default HamburgerBtn;
