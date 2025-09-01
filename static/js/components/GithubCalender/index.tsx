import React from 'react';
import GithubCalender from 'react-github-calendar';

const GithubCalenderView = () => {
  return (
    <div className="mb-10 flex justify-center flex-wrap">
      <div className="flex-shrink w-full">
        {/* <CardTitle title="Contributions" /> */}
        <h1 className="text-lg font-semibold tracking-wider mb-4 text-center">
          Contributions
        </h1>
      </div>
      <GithubCalender username="muhammad-shahid-jamal" />
    </div>
  );
};

export default GithubCalenderView;
