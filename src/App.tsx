import { DotsVerticalIcon } from "@heroicons/react/solid";
import { useState } from "react";

const App = () => {
  const [isVisibleNavBar, setIsVisibleNavBar] = useState<boolean>(false);

  const showNavBar = () => setIsVisibleNavBar(true);
  const hideNavBar = () => setIsVisibleNavBar(false);
  const toggleNavBar = () => (isVisibleNavBar ? hideNavBar() : showNavBar());

  return (
    <div>
      <header className="p-4 bg-gray-800 text-white">
        <div className="flex items-center justify-between mb-4 text-red-400">
          <div>
            <h2 className="text-3xl font-bold">Daaaave!</h2>
          </div>
          <div onClick={toggleNavBar} className="md:hidden p-2 cursor-pointer">
            <DotsVerticalIcon className="w-8 h-8 text-white hover:text-red-400" />
          </div>
        </div>
        {isVisibleNavBar && (
          <div className="flex flex-col">
            <a href="#a" className="p-1 hover:text-red-400">
              Home
            </a>
            <a href="#a" className="p-1 hover:text-red-400">
              Profile
            </a>
            <a href="#a" className="p-1 hover:text-red-400">
              Articles
            </a>
            <a href="#a" className="p-1 hover:text-red-400">
              Utilities
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
