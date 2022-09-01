import { useState } from 'react';
import MenuIcon from '../../assets/icons/MenuIcon';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  function toggleMobileNav() {
    setMobileNav(!mobileNav);
  }

  return (
    <header className="md:flex md:items-center p-4 md:py-0 shadow-md md:px-20">
      <div className="md:flex-1 flex justify-between">
        <h2 className="mb-4 md:mb-0 text-4xl">FooBar</h2>
        <span className="md:hidden" onClick={() => toggleMobileNav()}>
          <MenuIcon css="w-8 h-8" />
        </span>
      </div>
      <Navigation />
      <MobileNavigation active={mobileNav} />
    </header>
  );
};

export default Header;
