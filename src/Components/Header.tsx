import { NavLink } from 'react-router-dom';
import Navigation from './Header/Navigation';
import MobileNavigation from './Header/MobileNavigation';

const Header = () => {
  return (
    <header className="flex justify-end py-6 bug">
      <Navigation />
      <MobileNavigation />
    </header>
  );
};

export const NavLinkItem = ({
  label,
  path = '/',
}: {
  label: string;
  path?: string;
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `px-4 py-2  rounded-md hover:underline dark:hover:text-indigo-500 hover:text-indigo-700 ${
          isActive
            ? 'text-indigo-700 dark:text-indigo-500'
            : 'text-slate-900 dark:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export const LinkItem = ({
  label,
  path = '/',
}: {
  label: string;
  path?: string;
}) => {
  return (
    <a
      href={path}
      className="px-4 py-2 rounded-md hover:underline text-slate-900 dark:text-white hover:text-indigo-700 dark:hover:text-indigo-500"
    >
      {label}
    </a>
  );
};

export default Header;
