import React from 'react';
import './AirbnbLogo.css';
import { AirbnbLogo } from '../MainheaderSvg/MainHeaderSvg';

function Logo() {
  return (
    <div className="logo-total-area">
      <a className="logo-boundary-area" href="/">
        <div className="logo-outter-wrapper">
          <AirbnbLogo />
        </div>
      </a>
    </div>
  );
}

export default Logo;
