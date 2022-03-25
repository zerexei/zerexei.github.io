import { NavLink } from "react-router-dom";

const Header = () => {
  const defaulClassName =
    "font-bold tracking-wide text-red-500 uppercase hover:text-red-600 hover:underline";
  const activeClassName =
    "font-bold tracking-wide text-red-600 uppercase underline";

  return (
    <header className="h-12 pt-6 pb-2 flex justify-center items-center space-x-4 bg-red-200">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? activeClassName : defaulClassName
        }
      >
        Home
      </NavLink>
      <a href="https://github.com/zerexei" className={defaulClassName}>
        projects
      </a>
      <NavLink
        to="/tools"
        className={({ isActive }) =>
          isActive ? activeClassName : defaulClassName
        }
      >
        tools
      </NavLink>
    </header>
  );
};

export default Header;
