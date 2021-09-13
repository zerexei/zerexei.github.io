import NavLink from "./NavLink";

type LinksProps = {
  id: number;
  url: string;
  label: string;
};

type MobileNavBarProps = {
  links: LinksProps[];
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
