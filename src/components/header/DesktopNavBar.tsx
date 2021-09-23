import NavLink, { LinkType } from "./NavLink";

type DesktopNavBarProps = {
  links: LinkType[];
};

const DesktopNavBar = ({ links }: DesktopNavBarProps) => {
  return (
    <nav className="hidden lg:flex mt-4">
      {links.map((link) => {
        return <NavLink key={link.id} url={link.url} label={link.label} />;
      })}
    </nav>
  );
};

export default DesktopNavBar;
