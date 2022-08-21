import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="md:hidden">
        <MobileNavigation />
      </div>
      <div className="hidden md:block">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
