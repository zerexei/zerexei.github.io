const MenuIcon = ({ css }: { css: string }) => {
  return (
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
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
};

export default MenuIcon;
