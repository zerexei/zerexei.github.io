export const links = [
  { label: 'Home', url: '#', isActive: true }, // main page
  { label: 'Projects', url: 'https://github.com/zerexei', isActive: false }, // scroll down
  { label: 'Tools', url: '#/tools', isActive: false }, // other page
];

const Navigation = () => {
  return (
    <nav className="hidden md:flex text-center">
      {links.map((link) => {
        return (
          <a
            href={link.url}
            className={`nav-link ${!link.isActive ? '' : 'nav-link--active'}`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
