import { MenuAlt3Icon } from "@heroicons/react/solid";

type MenuProps = {
  toggleMobileNavBar: () => void;
};

const Menu = ({ toggleMobileNavBar }: MenuProps) => {
  return (
    <div
      onClick={toggleMobileNavBar}
      className="py-1 cursor-pointer hover:text-red-400 lg:hidden"
    >
      <MenuAlt3Icon className="w-12 h-8 text-current" />
    </div>
  );
};

export default Menu;
