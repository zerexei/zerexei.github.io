const Header = () => {
  return (
    <header className="bg-red-200 pt-6 pb-2 h-12 flex justify-center items-center space-x-4 uppercase font-bold text-red-500">
      <a href="#" className="tracking-wide hover:text-red-600 hover:underline">
        Home
      </a>
      <a href="#" className="tracking-wide hover:text-red-600 hover:underline">
        projects
      </a>
      <a href="#" className="tracking-wide hover:text-red-600 hover:underline">
        tools
      </a>
    </header>
  );
};

export default Header;
