import { NavLink as NavBarLink } from "react-router-dom";

type NavLinkProps = {
  url: string;
  label: string;
};

const NavLink = ({ url, label }: NavLinkProps) => {
  return (
    <NavBarLink
      to={url}
      exact
      activeClassName="text-red-400"
      className="p-1 px-2 hover:text-red-400"
    >
      {label}
    </NavBarLink>
  );
};

export default NavLink;
