import { useState } from 'react';
import Link from './Link';

import { NavigationLinkType } from './Link';

const MenuBarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = ({ css }: { css: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const MobileNavigation = () => {
  const [isShowNavigation, setIsShowNavigation] = useState<boolean>(false);

  const showNavigation = (state: boolean = true) => {
    setIsShowNavigation(state);
  };

  const title: string = 'Angelo Arcillas';
  const links: NavigationLinkType[] = [
    { id: 1, label: 'Home', url: '#home' },
    { id: 2, label: 'About Me', url: '#about-me' },
    { id: 3, label: 'Projects', url: '#projects' },
    { id: 4, label: 'Tools', url: '#tools' },
  ];

  return (
    <div className="mobile-nav">
      <h2 className="mobile-nav__title">{title}</h2>
      <div onClick={() => showNavigation()}>{MenuBarIcon}</div>

      {isShowNavigation && (
        <div className="mobile-nav__overlay">
          <div
            onClick={() => showNavigation(false)}
            className="mobile-nav__overlay__close"
          >
            <CloseIcon css="w-12 h-12 text-white" />
          </div>

          <nav className="mobile-nav__nav">
            {links.map((link) => (
              <Link
                key={link.id}
                label={link.label}
                url={link.url}
                css="mobile-nav__nav__item"
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
