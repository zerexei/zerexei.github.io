import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mb-12 md:mb-0">
      <div className="flex justify-end flex-1">
        <nav className="flex flex-wrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2  rounded-md hover:underline ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            Home
          </NavLink>

          <a href="/#projects" className="px-4 py-2 rounded-md hover:underline">
            Projects
          </a>

          <a
            href="/#technologies"
            className="px-4 py-2 rounded-md hover:underline"
          >
            Technologies
          </a>

          <NavLink
            to="/tools"
            className={({ isActive }) =>
              `px-4 py-2  rounded-md hover:underline ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            Tools
          </NavLink>

          <a
            href="https://medium.com/@angeloarcillas64"
            className="px-4 py-2 rounded-md hover:underline"
          >
            Blogs
          </a>

          {/* external??? */}
          <a
            href="/#redirect-about-me+contact-me-page"
            className="px-4 py-2 rounded-md hover:underline"
          >
            About Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
