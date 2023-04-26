import React from "react";
import { Nav, NavLink, NavMenu, MobileIcon }
    from "./NavbarElements";
import Logo from "../logo"
import HamburgerMenu from "../hamburgerMenu";


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Nav>
                <NavMenu>
                    <div className="logoDiv">
                        <Logo/>
                    </div>
                    <div className="leftMenuBar">
                        <div className="dropdown">
                            <button className="dropbtn">
                                <HamburgerMenu />
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                                <NavLink to='/home'>Home</NavLink>
                                <NavLink to="/account">Account</NavLink>
                                <NavLink to='/create-story'>Create Story</NavLink>
                                <NavLink to='/join-room'>Enter Classroom</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="rightLogin">
                        <NavLink to="/login">
                            LOGIN
                        </NavLink>
                    </div>
                    {/* <MobileIcon onClick={toggle}>
                        <HamburgerMenu />
                    </MobileIcon> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
