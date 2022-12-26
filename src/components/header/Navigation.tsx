export const links = [
  { label: 'Home', url: '#', isActive: true },
  { label: 'Services', url: '#/services', isActive: false },
  { label: 'Projects', url: 'https://github.com/zerexei', isActive: false },
  { label: 'Tools', url: '#/tools', isActive: false },
];

const Navigation = () => {
  return (
    <nav className="hidden md:flex text-center">
      {links.map((link) => {
        return (
          <a
            href={link.url}
            className={`nav-link ${link.isActive ? '' : 'nav-link--active'}`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
