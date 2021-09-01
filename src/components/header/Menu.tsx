import { DotsVerticalIcon } from "@heroicons/react/solid";

type MenuProps = {
  toggleNavBar: () => void;
};

const Menu = ({ toggleNavBar }: MenuProps) => {
  return (
    <div>
      <div onClick={toggleNavBar} className="p-2 cursor-pointer hover:text-red-400">
        <DotsVerticalIcon className="w-8 h-8 text-current" />
      </div>
    </div>
  );
};

export default Menu;
