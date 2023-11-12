import React from 'react';
import { LinkItem, NavLinkItem } from '../Header';

const Navigation = () => {
  return (
    <nav className="hidden md:block bug">
      <NavLinkItem path="/" label="Home" />
      <LinkItem path="/#projects" label="Projects" />
      <LinkItem path="/#technologies" label="Technologies" />
      <NavLinkItem path="/tools" label="Tools" />
      <NavLinkItem path="/link-collections" label="Resources" />
      <LinkItem path="https://medium.com/@angeloarcillas64" label="Blogs" />
      <LinkItem path="/#redirect-about-me+contact-me-page" label="About Me" />
    </nav>
  );
};

export default Navigation;
