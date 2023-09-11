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
          isActive ? 'text-primary' : ''
        }`
      }
    >
      {label}
    </NavLink>
  );
};

const LinkItem = ({ label, path = '/' }: { label: string; path?: string }) => {
  return (
    <a href={path} className="px-4 py-2 rounded-md hover:underline">
      {label}
    </a>
  );
};

const Header = () => {
  return (
    <header className="mb-12 md:mb-0">
      <div className="flex justify-end flex-1">
        <nav className="flex flex-wrap">
          <NavLinkItem path="/" label="Home" />
          <LinkItem path="/#projects" label="Projects" />
          <LinkItem path="/#technologies" label="Technologies" />
          <NavLinkItem path="/tools" label="Tools" />
          <NavLinkItem path="/link-collections" label="Resources" />
          <LinkItem path="https://medium.com/@angeloarcillas64" label="Blogs" />
          <LinkItem
            path="/#redirect-about-me+contact-me-page"
            label="About Me"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
