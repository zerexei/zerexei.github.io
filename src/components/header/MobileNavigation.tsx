import { useState } from 'react';

// components
import Link from './Link';

// variables
import { links } from './Navigation';

const MenuBarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
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
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
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
