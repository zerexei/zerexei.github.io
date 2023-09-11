import UpIcon from '@/Components/Includes/Icons/UpIcon';
import { useState } from 'react';

const LinkCollection = () => {
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
    <div className="flex items-center justify-between p-4 border border-transparent rounded-md hover:border-indigo-400">
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
          <p className="inline-block p-1.5 mr-1 rounded-full cursor-pointer hover:bg-indigo-600">
            <UpIcon className="w-5 h-5" />
          </p>
          <span className="inline text-xs">64</span>
        </div>
      </div>
    </div>
  );
};

const AvatarStack = () => {
  return (
    <div className="flex -space-x-1">
      <img
        className="inline-block w-6 h-6 rounded-full"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="inline-block w-6 h-6 rounded-full"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="inline-block w-6 h-6 rounded-full"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt=""
      />
      <img
        className="inline-block w-6 h-6 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </div>
  );
};

const ComboBox = () => {
  const [isShow, setIshow] = useState();
  return (
    <div className="">
      <label
        htmlFor="input-search"
        className="block mb-1 text-sm font-semibold tracking-wide text-slate-400"
      >
        Tags
      </label>
      <input
      onClick={setIshow(!isShow)}
        type="text"
        name="search"
        id="input-search"
        placeholder="tags..."
        className="px-3.5 w-[15rem] py-2.5 text-sm rounded-md text-slate-700"
      />
      {isShow && (
        <div className="p-2 mt-2 text-sm bg-white rounded text-slate-700">
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

const ComboBoxItem = () => {
  return (
    <label className="flex items-center p-1 cursor-pointer select-none hover:text-indigo-700">
      {/* TODO: style checkbox */}
      <input type="checkbox" />
      <span className="ml-1">Lorem, ipsum dolor sit</span>
    </label>
  );
};

export default LinkCollection;
