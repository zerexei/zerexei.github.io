import NavLink from "./NavLink";

const DesktopNavBar = () => {
  return (
    <nav className="hidden lg:flex mt-4">
      <NavLink url="/" label="Home" />
      <NavLink url="/profile" label="Profile" />
      <NavLink url="/article" label="Articles" />
      <NavLink url="/utilities" label="Utilities" />
    </nav>
  );
};

export default DesktopNavBar;
