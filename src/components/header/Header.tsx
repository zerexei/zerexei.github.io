import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="shadow-md mb-4">
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:hidden">
          <MobileNavigation />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
