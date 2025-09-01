import React, { useContext } from 'react';
import CardTitle from '../CardTitle';

import StyleScss from './style.module.scss';

import { ModalContext } from '../../context/modal.context';
import { TModal, TProject } from '../../@types/modal';

export const ProjectListComp: Array<TProject> = [
  {
    projectImage: 'QaboolHai.aab55759ba957fd27954.png',
    projectName: 'Misbah',
    link: 'https://QaboolHai.com',
    skills: ['React', 'AWS', 'TailwindCss', 'Sass', 'Stripe', 'Redux'],
    Description: (
      <>
        <p>
          Misbah is a captivating matchmaking website designed to cater
          specifically to the Muslim community. Built with cutting-edge
          technologies, the platform combines the power of React, Tailwind CSS,
          and seamless Stripe payment integration to provide a modern and
          efficient matchmaking experience.
        </p>
        <h3 className="my-4 font-bold text-md">Key Features</h3>
        <ol type="1" className="list-decimal ml-4">
          <li className="mb-2">
            <strong>Tailor-Made for Muslims:</strong> Misbah is thoughtfully
            designed to meet the unique requirements of Muslim individuals
            seeking life partners. The platform adheres to Islamic values and
            traditions, ensuring a safe and respectful environment for all
            users.
          </li>
          <li className="mb-2">
            <strong>User-Friendly Interface:</strong> The user interface is
            intuitive and engaging, allowing users to navigate effortlessly
            through the website and access all essential features with ease. An
            attractive and responsive design ensures optimal performance across
            various devices.
          </li>
          <li className="mb-2">
            <strong>Stripe Payment Integration:</strong> To provide a seamless
            experience, Misbah has integrated Stripe payment gateway for
            secure and hassle-free payment processing. Users can subscribe to
            premium plans and enjoy additional benefits.
          </li>
        </ol>
        <h3 className="my-4 font-bold text-md">Project Outcome</h3>
        <p>
          Misbah has revolutionized the way Muslim individuals connect with
          potential life partners. The website has received overwhelming
          positive feedback from its users, citing its user-friendly interface
          and effective matchmaking capabilities. We take great pride in knowing
          that our platform has played a significant role in fostering
          meaningful relationships within the Muslim community.
        </p>
      </>
    ),
  },
  {
    projectImage: 'icebox',
    projectName: 'Icebox Pantry (VMS)',
    link: 'https://iceboxpantry.com/',
    skills: [
      'React',
      'Electron',
      '.NET Pipes',
      'MongoDB',
      'Material UI',
      'Sass',
      'Web Socket',
      'Redux',
    ],
    Description: (
      <>
        <h3 className="my-4 font-bold text-md">
          Vending Machine Desktop Software - Fueling Sales to New Heights!
        </h3>
        <p>
          I am thrilled to showcase my Full-Stack Developer expertise through my
          latest project - a React with Electron desktop software designed
          exclusively for vending machines. This innovative solution has been
          deployed on over 50 machines, igniting a dramatic boost in vending
          machine sales like never before.
        </p>
        <h3 className="my-4 font-bold text-md">Key Features</h3>
        <ol type="1" className="list-decimal ml-4">
          <li className="mb-2">
            <strong>Enhanced User Experience:</strong> With a user-friendly
            interface, the desktop software ensures smooth and efficient
            interactions for both customers and operators.
          </li>
          <li className="mb-2">
            <strong>Real-Time Data Insights:</strong> The software provides
            comprehensive real-time data insights, empowering operators to make
            data-driven decisions for optimal stock management and revenue  
            optimization.
          </li>
          <li className="mb-2">
            <strong>Seamless Integration:</strong> My meticulous attention to
            detail allowed for seamless integration of the software with
            existing vending machine systems, minimizing downtime during
            deployment.
          </li>
          <li>
            <strong>Scalability and Reliability:</strong> By leveraging the
            power of React and Electron, I built a scalable and reliable
            solution capable of handling high volumes of transactions across
            multiple machines.
          </li>
        </ol>
        <h3 className="my-4 font-bold text-md">Challenges & Successes</h3>
        <p>
          Building this cutting-edge desktop software came with its fair share
          of challenges. Ensuring compatibility with various vending machine
          models, synchronizing data in real-time, and optimizing performance
          were some of the hurdles I faced. Through perseverance and innovative
          problem-solving, I overcame each obstacle to deliver a solution that
          exceeded expectations.
        </p>
        <h3 className="my-4 font-bold text-md">Impact & Results</h3>
        <p>
          Since the deployment of the desktop software, vending machine sales
          have soared to new heights! Operators now have invaluable insights at
          their fingertips, enabling them to stock their machines more
          strategically and cater to customer preferences effectively. The
          enhanced user experience has resulted in increased customer
          satisfaction, driving repeat purchases and elevating overall
          profitability.
        </p>
        <p>
          This project has been an exhilarating journey, combining my passion
          for Full-Stack Development with my dedication to creating
          game-changing solutions. Witnessing the significant impact of this
          project on the vending machine industry has been deeply rewarding.
        </p>
      </>
    ),
  },
  {
    projectImage: 'iceboxmobile',
    projectName: 'Icebox Pantry Mobile App',
    link: 'https://play.google.com/store/apps/details?id=com.iceboxpantrymobileapp',
    skills: [
      'React Native',
      'Typescript',
      'Sass',
      'TailwindCss',
      'Paper Ui',
      'Redux',
    ],
    Description: (
      <>
        <h3 className="my-4 font-bold text-md">
          Vending Machine Reservation App - Effortless Online Reservations at
          Your Fingertips!
        </h3>
        <p>
          I am thrilled to present one of my proudest achievements as a
          Full-Stack Developer - a React Native mobile app designed exclusively
          for online reservations from vending machines. This dynamic and
          user-friendly application allows users to effortlessly reserve
          products from their nearest vending machine locations.
        </p>
        <h3 className="my-4 font-bold text-md">Key Features</h3>
        <ol type="1" className="list-decimal ml-4">
          <li>
            <strong>Intuitive User Interface:</strong> The app boasts a sleek
            and intuitive user interface, ensuring a seamless and delightful
            reservation experience for users.
          </li>
          <li>
            <strong>Real-Time Location Services:</strong> Leveraging advanced
            geolocation technology, the app identifies nearby vending machine
            locations, offering users convenience and accessibility.
          </li>
          <li>
            <strong>Personalized Product Reservations:</strong> Users can easily
            browse through available products, reserve their favorites, and
            schedule pick-up times according to their preferences.
          </li>
          <li>
            <strong>Secure Transactions:</strong> With robust security measures
            in place, users can confidently complete their reservations and
            payments, guaranteeing a safe and hassle-free process.
          </li>
        </ol>
        <h3 className="my-4 font-bold text-md">Challenges & Solutions</h3>
        <p>
          Developing this innovative mobile app came with its unique challenges.
          Integrating real-time location services, synchronizing reservation
          data, and ensuring optimal performance across various devices were
          some of the hurdles I encountered. Through meticulous planning and
          creative problem-solving, I successfully addressed each challenge,
          resulting in a smooth and reliable app.
        </p>
        <h3 className="my-4 font-bold text-md">Impact & Results</h3>
        <p className="mb-4">
          Since the app&apos;s launch, it has revolutionized the way users
          interact with vending machines. Reservations have become effortless,
          eliminating the need to wait in lines and ensuring product
          availability at the user&apos;s preferred time. The personalized
          approach has significantly enhanced customer satisfaction, leading to
          increased user engagement and a boost in vending machine sales.
        </p>
        <p>
          This project has been a journey of innovation and determination,
          blending my passion for Full-Stack Development with a vision for
          creating meaningful user experiences. Witnessing the tangible impact
          of this project on user convenience and vending machine
          operators&apos; success has been incredibly gratifying.
        </p>
      </>
    ),
  },
  {
    projectImage: 'Kontrax',
    projectName: 'My Kontrax',
    link: 'https://mykontrax.com/',
    skills: [
      'React',
      'Redux',
      'Nodejs',
      'AWS',
      'Swagger',
      'Sass',
      'MongoDb',
      'Expressjs',
    ],
    Description: (
      <>
        <h3 className="my-4 font-bold text-md">
          Kontrax Website - Empowering Smart Contract-Based Solutions
        </h3>
        <p>
          I am excited to present one of my most impactful projects as a
          Full-Stack Developer - the Kontrax website. This dynamic platform,
          built using React, Node.js with Express, and MongoDB, is dedicated to
          providing innovative and secure smart contract-based solutions.
        </p>
        <h3 className="my-4 font-bold text-md">Key Features</h3>
        <ol type="1" className="list-decimal ml-4">
          <li>
            <strong>Smart Contract Integration:</strong> Kontrax harnesses the
            power of blockchain technology through seamless integration of smart
            contracts, ensuring trust and transparency in transactions.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> The website offers a
            user-friendly and intuitive interface, allowing users to
            effortlessly navigate and explore the smart contract
            functionalities.
          </li>
          <li>
            <strong>Enhanced Security:</strong> With a strong focus on security,
            Kontrax implements robust measures to safeguard user data and ensure
            the integrity of smart contract operations.
          </li>
          <li>
            <strong>Real-Time Data Updates:</strong> Leveraging the capabilities
            of React and Node.js, the website offers real-time updates on smart
            contract status and activities, enhancing user engagement and
            efficiency.
          </li>
        </ol>
        <h3 className="my-4 font-bold text-md">Challenges & Solutions</h3>
        <p>
          Developing the Kontrax website came with unique challenges.
          Integrating smart contracts, ensuring data consistency, and optimizing
          performance for real-time updates were some of the hurdles I
          encountered. Through meticulous planning and innovative
          problem-solving, I successfully addressed each challenge, resulting in
          a robust and responsive platform.
        </p>
        <h3 className="my-4 font-bold text-md">Impact & Results</h3>
        <p className="mb-4">
          Since its launch, Kontrax has made a significant impact on the
          adoption of smart contract-based solutions. Clients now have a secure
          and efficient platform to execute transactions with complete
          confidence in the blockchain technology&apos;s integrity. The
          user-friendly interface has led to increased user engagement and
          positive feedback, solidifying Kontrax&apos;s reputation as a trusted
          smart contract platform.
        </p>
        <p>
          This project has been an inspiring journey, uniting my passion for
          Full-Stack Development with a dedication to driving transformative
          solutions. Witnessing the tangible impact of Kontrax on businesses and
          individuals has been deeply fulfilling.
        </p>
      </>
    ),
  },
  {
    projectImage: 'usedpanda',
    projectName: 'Used Panda',
    link: 'https://usedpanda.com/home',
    skills: ['Angular', 'Sass', 'Api Integration', 'Axios'],
    Description: (
      <>
        <h3 className="my-4 font-bold text-md">
          Kontrax Website - Empowering Smart Contract-Based Solutions
        </h3>
        <p>
          I am delighted to present one of my most rewarding projects as a
          Full-Stack Developer - the development of Used Panda, a feature-rich
          website built using Angular. Used Panda is designed to provide users
          with a seamless and intuitive platform to list, buy, and sell new and
          used goods, reminiscent of the popular OLX platform.
        </p>
        <h3 className="my-4 font-bold text-md">Key Features</h3>
        <ol type="1" className="list-decimal ml-4">
          <li>
            <strong>User-Friendly Listing Interface:</strong> Used Panda offers
            users an easy-to-use listing interface, enabling them to showcase
            their items with clear descriptions and captivating images.
          </li>
          <li>
            <strong>OLX-Type Features:</strong> Inspired by the renowned OLX
            platform, Used Panda incorporates features like categories, filters,
            and location-based search, enhancing the user experience and
            facilitating product discovery.
          </li>
          <li>
            <strong>Secure Transactions:</strong> The website integrates robust
            backend API functionalities, ensuring secure and reliable
            transactions between buyers and sellers.
          </li>
          <li>
            <strong>Responsive Design:</strong> Built with Angular, Used Panda
            boasts a responsive and dynamic design, offering a seamless
            experience across various devices and screen sizes.
          </li>
        </ol>
        <h3 className="my-4 font-bold text-md">Challenges & Solutions</h3>
        <p>
          Building Used Panda came with its share of unique challenges.
          Implementing a real-time listing system, handling complex search
          queries, and ensuring data integrity were some of the hurdles I faced.
          Through innovative coding practices and collaboration with the backend
          team, I successfully overcame each challenge, delivering a fully
          functional and efficient website.
        </p>
        <h3 className="my-4 font-bold text-md">Impact & Results</h3>
        <p className="mb-4">
          Since its launch, Used Panda has significantly transformed the buying
          and selling experience for its users. Sellers now have a user-friendly
          platform to showcase their products, while buyers can easily discover
          and purchase items of interest. The seamless integration of backend
          API functionalities has enabled secure and smooth transactions,
          fostering trust and positive interactions between users.
        </p>
        <p>
          This project has been an exhilarating journey, combining my passion
          for Full-Stack Development with my commitment to delivering
          exceptional user experiences. Witnessing the tangible impact of Used
          Panda on the e-commerce landscape has been immensely gratifying.
        </p>
      </>
    ),
  },
];

const TechTag: React.FC<{ title: string }> = ({ title }) => (
  <div className="px-1.5 py-1 border border-solid border-secondary rounded text-xs h-fit">
    {title}
  </div>
);

const ProjectCard: React.FC<TProject> = ({
  projectName,
  projectImage,
  skills,
  link,
  Description,
}) => {
  const { updateModalData } = useContext<TModal>(ModalContext);
  return (
    <div
      className={`${StyleScss.project_card}`}
      onClick={() => {
        updateModalData({
          link: link,
          projectName: projectName,
          skills: skills,
          Description,
          projectImage,
        });
      }}
    >
      <img
        static={`../../assets/images/Projects/${projectImage}.png`}
        alt={`Project name ${projectImage}`}
        className="w-full"
      />
      <div
        className={`${StyleScss.about_project} px-4 py-2 pb-4 bg-secondBase`}
      >
        <h2 className="mb-2">{projectName}</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 2).map((tag, index) => (
              <TechTag title={tag} key={`tag_key_${index}`} />
            ))}
            <TechTag title={'...'} />
          </div>
          <div>
            <button className="bg-secondary text-base px-4 py-2">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectList: React.FC = () => {
  return (
    <div className={`mb-10 ${StyleScss.project_list}`}>
      <CardTitle title="Projects" />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {ProjectListComp.map((proj, index) => (
          <ProjectCard {...proj} key={`proj_${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
