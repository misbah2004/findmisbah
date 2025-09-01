import React, { useRef } from 'react';
import ShahidImg from '../../assets/images/shahid.jpg';
// import { Skills } from '../../@types/skills';
import AboutTechSection from '../AboutTechSection';
import {
  Html5,
  Javascript,
  Typescript,
  Csharp,
  Css3,
  Sass,
  ReactIcon,
  JqueryIcon,
  D3js,
  Nodejs,
  AngularIcon,
  UsFlag,
  PkFlag,
} from '../icons';
import {
  FacebookIcon,
  GiHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../SocialIcons/VectorGraphics';
import style from './style.module.scss';
import { Skills } from '../../@types/skills';

const skills: Array<Skills> = [
  {
    name: 'Javascript',
    icon: Javascript,
  },
  {
    name: 'Typescript',
    icon: Typescript,
  },
  {
    name: 'C#',
    icon: Csharp,
  },
  {
    name: 'Html5',
    icon: Html5,
  },
  {
    name: 'Css3',
    icon: Css3,
  },
  {
    name: 'Sass',
    icon: Sass,
  },
];

const libraries: Array<Skills> = [
  {
    name: 'React',
    icon: ReactIcon,
  },
  {
    name: 'Jquery',
    icon: JqueryIcon,
  },
  {
    name: 'd3.js',
    icon: D3js,
  },
  {
    name: 'chart.js',
    icon: JqueryIcon,
  },
];
const frameWorks: Array<Skills> = [
  {
    name: 'Node Js',
    icon: Nodejs,
  },
  {
    name: 'Angular Js',
    icon: AngularIcon,
  },
  {
    name: 'Entity Framework C#',
    icon: Csharp,
  },
];
const languages: Array<Skills> = [
  {
    name: 'English',
    icon: UsFlag,
  },
  {
    name: 'Urdu',
    icon: PkFlag,
  },
];

//TODO add databases as well

const SideInfo: React.FC = () => {
  const sideMenu = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={sideMenu}
      className={`fixed top-4 max-w-[280px] w-full lg:left-auto ${style._side_info}`}
    >
      {/* mobile control button */}
      <button
        title="toggle_skills"
        className={style._skills_toggle_btn}
        onClick={() => {
          sideMenu.current?.classList.toggle(style.active);
        }}
      >
        <span></span>
      </button>
      {/* About section */}
      <div className={style.profile_pic}>
        <img
          src={ShahidImg}
          alt="shahid profile pic"
          className="rounded-full w-[80px] h-[80px] object-cover object-center"
        />
        <h1 className="my-2 text-sm">Muhammad Misbah Ul Hassan</h1>
        <p className="text-gray text-xs">
          Fullstack Developer
          <br />
          <span className="text-secondary">Javascript</span> |{' '}
          <span className="text-secondary">React</span> |{' '}
          <span className="text-secondary">Node</span> |{' '}
          <span className="text-secondary">PostgreSQL</span>
        </p>
      </div>
      {/* Skills Section */}
      <div className={style.about} data-scrollbar>
        <AboutTechSection title="Coding" skills={skills} border />
        <AboutTechSection title="Libraries" skills={libraries} border />
        <AboutTechSection title="Frameworks" skills={frameWorks} />
        <AboutTechSection title="Language" skills={languages} />
      </div>
      {/* social media links */}
      <div className={style.social_Icons}>
        <h4 className="text-center py-2 text-sm">Follow me ! 🤙</h4>
        <ul className="flex justify-center gap-2 pb-3">
          <li>
            <a
              href="https://github.com/Muhammad-Shahid-Jamal"
              target="_blank"
              rel="noreferrer"
            >
              <GiHubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/m-shahid-jamal"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Shahid_jamal034"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/FullstackDeveloperLife"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mshahid.jamal"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export {};
export default SideInfo;
