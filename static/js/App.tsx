import React, { useEffect, useRef, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { AnchorPlugin } from './plugin/AnchorPlugin';
import style from './App.module.css';
import Layout from './components/Layout';
import SideInfo from './components/SideInfo/';
import ThumbsUp from './assets/images/thumbsup.webp';
import RSideNavbar from './components/RSideNavbar';
import ExpAbout from './components/ExpAbout';
import ServiceCard, { ServiceType } from './components/ServiceCard';
// import CartTitle from './components/CardTitle';
// import PriceCard from './components/PriceCard';
import IntroSection from './components/IntroSection';
import ProjectList from './components/ProjectList';
// import smoothScroll from './utils/SmoothScroll';
import Footer from './components/Footer';
import GithubCalenderView from './components/GithubCalender';
import InViewWrapper from './components/InViewWrapper';

function App() {
  const mainContent = useRef<HTMLDivElement>(null);
  const [services, setServices] = useState<Array<ServiceType>>([]);
  useEffect(() => {
    document.body.classList.add('bg-base');
    // smoothScroll(document, 120, 12);
    Scrollbar.use(AnchorPlugin);
    Scrollbar.initAll({
      damping: 0.05,
    });
    function getService() {
      fetch('data.json')
        .then((res) => res.json())
        .then((value) => {
          setServices(value.services);
        });
    }
    getService();
  }, []);
  return (
    <Layout>
      <div className="lg:flex lg:flex-row gap-4">
        <div className="basis-full max-w-0 lg:max-w-[280px] text-white bg-secondBase sticky top-4 z-[1]">
          <SideInfo />
        </div>
        <div
          ref={mainContent}
          className={`text-white relative ${style.content}`}
          data-scrollbar
        >
          {/* header */}
          <div className={`bg-cover bg-center p-4 md:p-10 ${style.intro}`}>
            <p className="relative z-[1] text-white">
              {'<'}
              <span className="text-secondary">code</span>
              {'>'}
            </p>
            <h1 className="relative z-[1] text-[48px] font-bold leading-[60px] max-w-lg my-4 pl-4">
              Make your business shine on the web
            </h1>
            <p className="relative z-[1] text-white">
              {'</'}
              <span className="text-secondary">code</span>
              {'>'}
            </p>
            <a
              href="/"
              className="inline-block bg-secondary outline-none relative px-5 py-2 z-[1] mt-4 text-secondBase cursor-pointer"
            >
              Explore Now
            </a>
            <img
              src={ThumbsUp}
              alt="what is FrontEnd Developer"
              className="absolute max-w-xs right-0 -top-7 z-[2] hidden xl:block"
            />
          </div>
          {/* Experience */}
          <div className="text-white py-4 my-4 flex gap-4 flex-wrap xl:pr-[320px]">
            <ExpAbout highlight="5+" text="Years of Experience" />
            <ExpAbout highlight="30+" text="Completed Projects" />
            <ExpAbout highlight="50+" text="Happy Customers" />
          </div>
          {/* About section */}
          <InViewWrapper _id="home">
            <IntroSection />
          </InViewWrapper>
          {/* Project highlight */}
          <InViewWrapper _id="projects">
            <ProjectList />
          </InViewWrapper>
          {/* Services */}
          <InViewWrapper _id="services">
            <ServiceCard title="My services" services={services} />
          </InViewWrapper>
          {/* Price Plan section */}
          {/* <div>
            <CartTitle title="Price Plans" />
            <div className="flex gap-6 mt-4">
              <PriceCard popular={false} />
              <PriceCard popular={true} />
              <PriceCard popular={false} />
            </div>
          </div> */}
          {/* contribution */}
          <GithubCalenderView />
          <Footer />
        </div>
        <div className="basis-full max-w-[80px] text-white">
          <RSideNavbar
            toggleFunction={() => {
              mainContent.current?.classList.toggle(style.active);
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
