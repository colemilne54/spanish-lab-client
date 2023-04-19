import React from 'react';
import hamburgerMenu from '../hamburgerMenu.png'

console.log(hamburgerMenu);

function HamburgerMenu() {
    // Import result is the URL of your image
    return <img src={hamburgerMenu} alt="Logo" width="47.5" height="32.5" class = "" />;
}

export default HamburgerMenu;