import ComingSoon from '@Components/ComingSoon';

const Hero = () => {
  return (
    <div>
      <section className="min-h-[35rem] flex justify-center items-center">
        {/* Name/Role */}
        <div className="text-center">
          <div className="mb-6">
            <h1 className="heading-1">Angelo Arcillas</h1>
            <h2 className="text-xl">Web Developer</h2>
          </div>
          {/* End of name/role */}
          {/* Bio */}
          <div>
            <p className="w-2/3 mx-auto">
              Web developer with experience writing Javascript and PHP with some
              knowledge of linux server administration, I specialize in building
              web applications using frameworks like Reactjs, Vuejs, Laravel and
              Tailwindcss. I am a graduate of BS Computer Science majoring in
              software technology. A self-motivated, Adept learner and hard
              working developer who loves back end development.
            </p>
          </div>
          {/* End of bio */}
        </div>
      </section>
      <Card>
        <Card.Button />
      </Card>
    </div>
  );
};

const Card = ({children}) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      {children}
    </div>
  );
};

const Button = () => {
  return (
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  );
};

import {Card, CardButton, ....} from 'Button'  

import {Card} from 'Button'  
  
Card.Button = Button;

export default Hero;
