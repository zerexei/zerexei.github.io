import NavLink, { LinkType } from "./NavLink";


type MobileNavBarProps = {
  links: LinkType[];
};

const MobileNavBar = ({ links }: MobileNavBarProps) => {
  return (
    <nav className="flex flex-col mt-4 lg:flex-row">
      {links.map((link) => {
        return <NavLink key={link.id} url={link.url} label={link.label} />;
      })}
    </nav>
  );
};

export default MobileNavBar;
