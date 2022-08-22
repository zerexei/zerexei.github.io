const Navigation = () => {
  return (
    <nav className="flex-1 hidden md:flex text-center">
      <a href="#a" className="nav-link nav-link--active">
        Home
      </a>
      <a href="#a" className="nav-link">
        Services
      </a>
      <a href="#a" className="nav-link">
        Projects
      </a>
      <a href="#a" className="nav-link">
        Tools
      </a>
    </nav>
  );
};

export default Navigation;
