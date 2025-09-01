import React from 'react';
import CardTitle from '../CardTitle';
import style from './style.module.scss';

const IntroSection: React.FC = () => {
  return (
    <div className="mb-10">
      <CardTitle title="About Me! 🚀" />
      <p className={`${style.intro} p-4`}>
        I&apos;m a passionate software engineer with a keen eye for detail, and
        a drive to create elegant, efficient, and user-friendly solutions. With
        over 5+ years of experience in web development, I&apos;ve honed my
        skills in a variety of technologies, including ReactJs,
        Nodejs,Typescript, Javascript es6+ and MongoDb.
        <br />
        <br />
        I take pride in staying up-to-date with the latest trends and
        advancements in the field, and I&apos;m always looking for new and
        innovative ways to tackle complex problems. My expertise ranges from
        front-end design and development to back-end server-side programming,
        and I&apos;ve worked on projects ranging from small-scale web
        applications to large enterprise solutions.
        <br />
        <br />
        In this portfolio, you&apos;ll find a selection of my recent projects
        and contributions, which showcase my skills in areas such as Domain
        Knowledge and work experience on Vending Controllers and Vending
        Machines, as well as my ability to work collaboratively with other
        developers and stakeholders. I invite you to take a look around, and
        feel free to reach out to me with any questions or inquiries.
        <br />
        <br />
        Thank you for your interest, and I look forward to connecting with you
        soon!
      </p>
    </div>
  );
};

export default IntroSection;
