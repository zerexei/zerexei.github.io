import NavLink from "./NavLink";

type LinksProps = {
  id: number;
  url: string;
  label: string;
};

type MobileNavBarProps = {
  links: LinksProps[];
};
const DesktopNavBar = ({ links }: MobileNavBarProps) => {
  return (
    <nav className="hidden lg:flex mt-4">
      {links.map((link) => {
        return <NavLink key={link.id} url={link.url} label={link.label} />;
      })}
    </nav>
  );
};

export default DesktopNavBar;
