const Header = () => {
  return (
    <header className="">
      <div className="flex">
        <div></div>
        <div className="flex-1 flex justify-end">
          <nav className="flex">
            <a href="/" className="px-4 py-2  rounded-md hover:underline">
              Home
            </a>

            <a
              href="#projects"
              className="px-4 py-2  rounded-md hover:underline"
            >
              Projects
            </a>

            <a
              href="#technologies"
              className="px-4 py-2  rounded-md hover:underline"
            >
              Technologies
            </a>

            <a
              href="#redirect-tools-page"
              className="px-4 py-2  rounded-md hover:underline"
            >
              Tools
            </a>

            <a
              href="https://medium.com/@angeloarcillas64"
              className="px-4 py-2  rounded-md hover:underline"
            >
              Blogs
            </a>

            <a
              href="#redirect-about-me+contact-me-page"
              className="px-4 py-2  rounded-md hover:underline"
            >
              About Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
