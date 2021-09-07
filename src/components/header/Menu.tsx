import { MenuAlt3Icon } from "@heroicons/react/solid";

type MenuProps = {
  toggleNavBar: () => void;
};

const Menu = ({ toggleNavBar }: MenuProps) => {
  return (
    <div
      onClick={toggleNavBar}
      className="py-1 cursor-pointer select-none hover:text-red-400"
    >
      <MenuAlt3Icon className="w-12 h-8 text-current select-none" />
    </div>
  );
};

export default Menu;
