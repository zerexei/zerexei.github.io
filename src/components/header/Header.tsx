import { useState } from "react";

// components
import Brand from "./Brand";
import Menu from "./Menu";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

// datas
import Links from "../../data/nav_links.json";

const Header = () => {
  const [isVisibleMobileNavBar, setIsVisibleMobileNavBar] =
    useState<boolean>(false);

  const toggleMobileNavBar = () =>
    setIsVisibleMobileNavBar(!isVisibleMobileNavBar);

  return (
    <header className="p-4 bg-gray-800 text-gray-200">
      <div className="lg:w-3/4 lg:flex lg:justify-between lg:mx-auto">
        <div className="flex items-center justify-between">
          <Brand />
          <Menu toggleMobileNavBar={toggleMobileNavBar} />
        </div>

        {isVisibleMobileNavBar && <MobileNavBar links={Links} />}
        <DesktopNavBar links={Links} />
      </div>
    </header>
  );
};

export default Header;
