import React from 'react';
import './MainHeader.css';
import Logo from './Logo/AirbnbLogo';
import MiddleMenu from './MiddleMenu/MiddleMenu';
import RightMenu from './MyMenu/MyMenu';

function Header() {
  return (
    <header className="header-area-attr">
      <Logo />
      <MiddleMenu />
      <RightMenu />
    </header>
  );
}

export default Header;
