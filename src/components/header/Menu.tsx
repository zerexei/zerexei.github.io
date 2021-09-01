import { DotsVerticalIcon } from "@heroicons/react/solid";

type MenuProps = {
  toggleNavBar: () => void;
};

const Menu = ({ toggleNavBar }: MenuProps) => {
  return (
    <div>
      <div onClick={toggleNavBar} className="p-2 cursor-pointer">
        <DotsVerticalIcon className="w-8 h-8 hover:text-red-400" />
      </div>
    </div>
  );
};

export default Menu;
