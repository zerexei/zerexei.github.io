import Link, { NavigationLinkType } from './Link';

export const links: NavigationLinkType[] = [
  { id: 1, label: 'Home', url: '#home' },
  { id: 2, label: 'About Me', url: '#about-me' },
  { id: 3, label: 'Projects', url: '#projects' },
  { id: 4, label: 'Tools', url: '#tools' },
];

const Navigation = () => {
  return (
    <div className="flex flex-wrap items-center py-4 px-8">
      <div>
        <h2 className="text-2xl font-bold uppercase">Angelo Arcillas</h2>
      </div>
      <nav className="flex-1 flex justify-center">
        {links.map((link) => (
          <Link
            key={link.id}
            label={link.label}
            url={link.url}
            css="py-2 px-4 hover:text-white"
          />
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
