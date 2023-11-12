import React, { useState } from 'react';
import { LinkItem, NavLinkItem } from '../Header';

const MobileNavigation = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  return (
    <div className="block md:hidden">
      <div>
        <MobileMenu onClick={() => setDialog(true)} className="w-6 h-6" />
      </div>

      {dialog && (
        <nav className="fixed inset-0 z-10 flex flex-col py-12 text-xl font-bold text-center bg-indigo-400/95 md:hidden font-roboto dark:bg-slate-900">
          <NavLinkItem path="/" label="Home" />
          <LinkItem path="/#projects" label="Projects" />
          <LinkItem path="/#technologies" label="Technologies" />
          <NavLinkItem path="/tools" label="Tools" />
          <NavLinkItem path="/link-collections" label="Resources" />
          <LinkItem path="https://medium.com/@angeloarcillas64" label="Blogs" />
          <LinkItem
            path="/#redirect-about-me+contact-me-page"
            label="About Me"
          />
        </nav>
      )}
    </div>
  );
};

const MobileMenu = ({ className = 'w-6 h-6', onClick }) => {
  return (
    <button
    onClick={onClick}
      type="button"
      className=""
      aria-controls="navbar-hamburger"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};

export default MobileNavigation;
