
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HamburgerMenu from './HamburgerMenu';

import "../../style/header.css"

export default function Header() {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const location = useLocation();
    

    return (
        <div id='header'>
            <div id="header-logo">
                <img src="../assets/White_Logo.png" alt="MP Partners Logo" />
            </div>
            {isMobile ? (
                <HamburgerMenu />
            ) : (
                <nav id='menu-desktop'>
                    <div className={`menu-option` + (location.pathname === '/' ? ' selected' : '')}>
                        <p onClick={() => navigate('/')}>Home</p>
                    </div>

                    <div className={`menu-option` + (location.pathname === '/about' ? ' selected' : '')}>
                        <p onClick={() => navigate('/about')}>About</p>
                    </div>

                    <div className={`menu-option` + (location.pathname === '/services' ? ' selected' : '')}>
                        <p onClick={() => navigate('/services')}>Services</p>
                    </div>

                    <div className={`menu-option` + (location.pathname === '/team' ? ' selected' : '')}>
                        <p onClick={() => navigate('/team')}>Team</p>
                    </div>

                    <div className={`call-to-action menu-option` + (location.pathname === '/contact' ? ' selected' : '')}>
                        <p onClick={() => navigate('/contact')}>Contact Us</p>
                    </div>
                </nav>
            )}
        </div>
    )
}
