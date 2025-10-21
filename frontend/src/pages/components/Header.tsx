import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HamburgerMenu from './HamburgerMenu';

import "../../style/header.css"

export default function Header() {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div id='header'>
            <div id="header-logo"><h1>Logo</h1></div>
            {isMobile ? (
                <HamburgerMenu />
            ) : (
                <nav id='menu-desktop'>
                    <div className='menu-option'>
                        <p onClick={() => navigate('/')}>Home</p>
                    </div>

                    <div className='menu-option'>
                        <p onClick={() => navigate('/about')}>About</p>
                    </div>

                    <div className='menu-option'>
                        <p onClick={() => navigate('/services')}>Services</p>
                    </div>

                    <div className='menu-option'>
                        <p onClick={() => navigate('/team')}>Team</p>
                    </div>

                    <div className='call-to-action menu-option'>
                        <p onClick={() => navigate('/contact')}>Contact Us</p>
                    </div>
                </nav>
            )}
        </div>
    )
}
