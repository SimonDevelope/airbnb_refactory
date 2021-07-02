import React from 'react';
import './MainHeader.css';
import Logo from '../Logo/AirbnbLogo';
import MiddleMenu from '../MiddleMenu/MiddleMenu';


function Header () {
    return(
        <header className='Header-area-attr'>
            <Logo/>
            <MiddleMenu/>
        </header>
    );
}

export default Header;