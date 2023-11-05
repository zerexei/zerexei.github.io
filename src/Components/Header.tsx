import { NavLink } from 'react-router-dom';

const NavLinkItem = ({
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
        `px-4 py-2  rounded-md hover:underline ${
          isActive ? 'text-primary dark:text-primary-dark' : 'text-slate-900 dark:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  );
};

const LinkItem = ({ label, path = '/' }: { label: string; path?: string }) => {
  return (
    <a href={path} className="px-4 py-2 rounded-md text-slate-900 dark:text-white hover:underline">
      {label}
    </a>
  );
};

const Header = () => {
  return (
    <header className="mb-12 md:mb-0">
      <nav className="flex flex-wrap justify-end ">
        <NavLinkItem path="/" label="Home" />
        <LinkItem path="/#projects" label="Projects" />
        <LinkItem path="/#technologies" label="Technologies" />
        <NavLinkItem path="/tools" label="Tools" />
        <NavLinkItem path="/link-collections" label="Resources" />
        <LinkItem path="https://medium.com/@angeloarcillas64" label="Blogs" />
        <LinkItem path="/#redirect-about-me+contact-me-page" label="About Me" />
      </nav>
    </header>
  );
};

export default Header;
