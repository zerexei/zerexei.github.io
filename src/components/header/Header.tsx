import { useState } from "react";

import Menu from "./Menu";
import Brand from "./Brand";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

const Header = () => {
  const [isVisibleMobileNavBar, setIsVisibleMobileNavBar] =
    useState<boolean>(false);

  const showMobileNavBar = () => setIsVisibleMobileNavBar(true);
  const hideMobileNavBar = () => setIsVisibleMobileNavBar(false);
  const toggleMobileNavBar = () =>
    isVisibleMobileNavBar ? hideMobileNavBar() : showMobileNavBar();

  return (
    <header className="p-4 bg-gray-800 text-gray-200">
      <div className="lg:w-3/4 lg:flex lg:justify-between lg:mx-auto">
        <div className="flex items-center justify-between">
          <Brand />
          <Menu toggleMobileNavBar={toggleMobileNavBar} />
        </div>

        {isVisibleMobileNavBar && <MobileNavBar />}
        <DesktopNavBar />
      </div>
    </header>
  );
};

export default Header;
