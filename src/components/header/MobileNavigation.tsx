const CloseMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="absolute top-5 right-5 w-20 h-20 p-4 active:text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const MobileNavigation = ({ active }: { active: string }) => {
  // let css = 'flex-col';
  // css += active ? ' flex' : ' hidden';

  return (
    <div className="md:hidden fixed top-0 left-0 w-screen h-screen bg-gray-700">
      <div className="relative">
        <CloseMenu />
      </div>
      <nav className="flex flex-col justify-center h-full text-center">
        <a
          href="#a"
          className="p-4 text-xl font-bold tracking-wide text-blue-400"
        >
          Home
        </a>
        <a href="#a" className="p-4 text-xl font-bold tracking-wide">
          Services
        </a>
        <a href="#a" className="p-4 text-xl font-bold tracking-wide">
          Projects
        </a>
        <a href="#a" className="p-4 text-xl font-bold tracking-wide">
          Tools
        </a>
      </nav>
    </div>
  );
};

export default MobileNavigation;
