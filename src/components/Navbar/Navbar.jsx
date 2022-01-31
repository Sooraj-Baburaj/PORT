import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './navbar.css';

const Navbar = () => {
    const [activeMenu, setActiveMenu ] = useState(false);

    let screenWidth = window.innerWidth;

    const mobile = screenWidth < 780;

    return (
        <div className='Port_navbar'>
            <div className="navbar-title"><h1>PORT</h1></div>
            {!mobile ? (
                <div className="navbar-links">
                <ul>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#WhyUs">About</a></li>
                    <li><a href="#HWW">What is PORT?</a></li>
                    <li>Contact Us</li>
                </ul>
            </div>
            ) : (
                <div className="mobile-menu" onClick={() => setActiveMenu(!activeMenu)} >
                    { activeMenu ? <AiOutlineClose /> : <AiOutlineMenu /> }
                </div>
            )}
                {mobile && (
                    <div style={{transform: activeMenu ? 'scale(1)' : 'scale(0)', height: activeMenu ? '300px' : '0px', width: activeMenu ? '250px' : '0px'}} className="Port_navbar-mobile-menu">
                    <div className="mobile-menu-links">
                        <h1>Menu</h1>
                        <ul>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#WhyUs">About</a></li>
                            <li><a href="#HWW">What is PORT?</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    </div>
                )}
        </div>
    )
};

export default Navbar;
