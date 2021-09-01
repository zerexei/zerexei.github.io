type NavLinkProps = {
  url: string;
  label: string;
};

const NavLink = ({ url, label }: NavLinkProps) => {
  return (
    <a href={url} className="p-1 hover:text-red-400">
      {label}
    </a>
  );
};

export default NavLink;
