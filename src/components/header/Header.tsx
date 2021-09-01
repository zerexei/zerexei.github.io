import { useState } from "react";
import Brand from "./Brand";
import Menu from "./Menu";
import NavBar from "./NavBar";

const Header = () => {
  const [isVisibleNavBar, setIsVisibleNavBar] = useState<boolean>(false);

  const showNavBar = () => setIsVisibleNavBar(true);
  const hideNavBar = () => setIsVisibleNavBar(false);
  const toggleNavBar = () => (isVisibleNavBar ? hideNavBar() : showNavBar());

  return (
    <header className="p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <Brand />
        
        <Menu toggleNavBar={toggleNavBar} />
      </div>

      {isVisibleNavBar && <NavBar />}
    </header>
  );
};

export default Header;
