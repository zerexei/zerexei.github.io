import ClickedIcon from '@/Components/Includes/Icons/ClickedIcon';
import LaravelIcon from '@/Components/Includes/Icons/dev/LaravelIcon';
import SassIcon from '@/Components/Includes/Icons/dev/SassIcon';
import TailwindcssIcon from '@/Components/Includes/Icons/dev/TailwindcssIcon';
import VuejsIcon from '@/Components/Includes/Icons/dev/VuejsIcon';
import { useState } from 'react';

const LinkCollection = () => {
  /*
   TODO:
   - Add more icons
   - design filters
   - use real data
      - use firebase
   - review UI
   - upload to prod

   - create about me page
   - update projects section
      - use firebase
   - improve technologies section

   - update tools UI
      - use firebase
   - add more tools
   */
  return (
    <div className="p-12">
      <div className="flex items-end">
        <Filters />
        <div className="flex gap-4 ml-auto">
          <InputSearch />
          <ComboBox />
        </div>
      </div>

      <div className="flex flex-col mt-12">
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="border-2 border-red-400 border-dotted w-[15rem] p-2">
      AAAAAAA
    </div>
  );
};

const InputSearch = () => {
  return (
    <div className="">
      <label
        htmlFor="input-search"
        className="block mb-1 text-sm font-semibold tracking-wide text-slate-400"
      >
        Search
      </label>
      <input
        type="text"
        name="search"
        id="input-search"
        placeholder="Search..."
        className="px-3.5 w-[15rem] py-2.5 text-sm rounded-md text-slate-700"
      />
    </div>
  );
};

const LinkItem = () => {
  return (
    <div className="flex items-center justify-between p-4 border border-transparent rounded-md cursor-pointer hover:border-indigo-400">
      <div>
        <h3 className="mb-1 font-semibold cursor-pointer hover:text-indigo-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h3>
        <h5 className="text-xs tracking-wide text-slate-400">
          Angelo Arcillas
          {/* FIXME: parse &dot; */}
          <span> . 2d ago</span>
        </h5>
      </div>

      <div className="flex items-center gap-2">
        <AvatarStack />
        <div className="flex items-center text-slate-400">
          <p className="inline-block p-1.5 mr-1 rounded-full cursor-pointer hover:bg-indigo-600 transition-colors duration-150">
            <ClickedIcon />
          </p>
          <span className="inline text-xs">64</span>
        </div>
      </div>
    </div>
  );
};

const AvatarStack = () => {
  return (
    <div className="flex items-center">
      <span className="p-2 rounded-full bg-slate-700">
        <LaravelIcon />
      </span>
      <span className="p-2 rounded-full bg-slate-700">
        <VuejsIcon />
      </span>
      <span className="p-2 rounded-full bg-slate-700">
        <TailwindcssIcon />
      </span>
      <span className="p-2 rounded-full bg-slate-700">
        <SassIcon />
      </span>
      <EllipsisVerticalIcon />
    </div>
  );
};

const ComboBox = () => {
  const [isShow, setIsShow] = useState<boolean>();
  return (
    <div className="relative">
      <label
        htmlFor="input-search"
        className="block mb-1 text-sm font-semibold tracking-wide text-slate-400"
      >
        Tags
      </label>
      <input
        onClick={() => setIsShow(!isShow)}
        type="text"
        name="search"
        id="input-search"
        placeholder="tags..."
        autoComplete="off"
        className="px-3.5 w-[15rem] py-2.5 text-sm rounded-md text-slate-700"
      />
      {isShow && (
        <div className="absolute w-full p-2 mt-2 text-sm bg-white rounded text-slate-700">
          <ComboBoxItem />
          <ComboBoxItem />
          <ComboBoxItem />
          <ComboBoxItem />
          <ComboBoxItem />
        </div>
      )}
    </div>
  );
};

const EllipsisVerticalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};
const ComboBoxItem = () => {
  return (
    <label className="flex items-center w-full p-1 cursor-pointer select-none hover:text-indigo-700">
      {/* TODO: style checkbox */}
      <input type="checkbox" />
      <span className="ml-1">Lorem, ipsum dolor sit</span>
    </label>
  );
};

export default LinkCollection;
