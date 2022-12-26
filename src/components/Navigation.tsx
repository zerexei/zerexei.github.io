import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', url: '/', isActive: true }, // main page
  { label: 'Projects', url: 'https://github.com/zerexei', isActive: false }, // scroll down
  { label: 'Tools', url: '/tools', isActive: false }, // other page
];

const Navigation = () => {
  return (
    <nav className="flex justify-center items-center gap-4">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.url}
            className={`nav-link ${!link.isActive ? '' : 'nav-link--active'}`}
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
