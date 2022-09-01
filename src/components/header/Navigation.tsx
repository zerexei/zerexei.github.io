const Navigation = () => {
  return (
    <nav className="hidden md:flex text-center">
      <a href="#a" className="nav-link nav-link--active py-2 px-6 hover:text-green-700 hover:border-b-2 hover:border-green-400">
        Home
      </a>
      <a href="#a" className="nav-link py-2 px-6 hover:text-green-700 hover:border-b-2 hover:border-green-400">
        Services
      </a>
      <a href="#a" className="nav-link  py-2 px-6 hover:text-green-700 hover:border-b-2 hover:border-green-400">
        Projects
      </a>
      <a href="#a" className="nav-link  py-2 px-6 hover:text-green-700 hover:border-b-2 hover:border-green-400">
        Tools
      </a>
    </nav>
  );
};

export default Navigation;
