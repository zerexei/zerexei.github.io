import { ArrowRightIcon } from "@heroicons/react/solid";

import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />

      <section className="py-6">
        <h2 className="mb-6 text-4xl text-center uppercase">my top projects</h2>

        <div className="flex justify-center flex-wrap">
          <div className="bg-white p-4">
            <h4 className="inline-block pr-6 mb-2 text-xl border-b-4 border-red-400">
              PHP-Core
            </h4>
            <p className="mb-6 text-sm tracking-wider text-gray-900">
              Simple php laravel like framework w/ Router and Database support.
            </p>
            <div className="flex items-center justify-between pb-6">
              <div className="flex-1 flex flex-wrap gap-1 text-xs">
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  HTMl
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Tailwindcss
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Javascript
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  PHP
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  SQL
                </span>
              </div>
              <a
                href="#a"
                className="py-1.5 px-4 bg-red-400 text-white rounded-md hover:bg-red-500 text-sm tracking-wider"
              >
                View
                <ArrowRightIcon className="inline-block w-5 h-5 ml-2 text-white" />
              </a>
            </div>
          </div>

          <div className="bg-white p-4">
            <h4 className="inline-block pr-6 mb-2 text-xl border-b-4 border-red-400">
              Hotel Management System
            </h4>
            <p className="mb-6 text-sm tracking-wider text-gray-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              veniam commodi quam earum perferendis similique saepe asperiores?
              Quos excepturi rem, vero, quod eligendi, repudiandae earum
              accusantium magnam recusandae veritatis nostrum.
            </p>
            <div className="flex items-center justify-between pb-6">
              <div className="flex-1 flex flex-wrap gap-1 text-xs">
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  HTML
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Reactjs
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Nodejs
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Express
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Typescript
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Tailwindcss
                </span>
              </div>
              <a
                href="#a"
                className="py-1.5 px-4 bg-red-400 text-white rounded-md hover:bg-red-500 text-sm tracking-wider"
              >
                View
                <ArrowRightIcon className="inline-block w-5 h-5 ml-2 text-white" />
              </a>
            </div>
          </div>

          <div className="bg-white p-4">
            <h4 className="inline-block pr-6 mb-2 text-xl border-b-4 border-red-400">
              Hotem Management System
            </h4>
            <p className="mb-6 text-sm tracking-wider text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              illum optio cupiditate iusto quos distinctio dolores eius porro
              exercitationem ex magnam quas rem, culpa deserunt, quia possimus
              dignissimos voluptatibus aut!
            </p>
            <div className="flex items-center justify-between pb-6">
              <div className="flex-1 flex flex-wrap gap-1 text-xs">
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  HTML
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Tailwindcss
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Javascript
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Laravel
                </span>
                <span className="p-1 px-2 text-white bg-red-400 rounded-full">
                  Livewire
                </span>
              </div>
              <a
                href="#a"
                className="py-1.5 px-4 bg-red-400 text-white rounded-md hover:bg-red-500 text-sm tracking-wider"
              >
                View
                <ArrowRightIcon className="inline-block w-5 h-5 ml-2 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
