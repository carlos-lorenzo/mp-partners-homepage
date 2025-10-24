import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../style/hamburger.css';

export default function HamburgerMenu({ handleNavigate }: { handleNavigate: (path: string) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleHamburgerNavigate = (path: string) => {
        handleNavigate(path);
        setIsOpen(false);
    };



    return (
        <>
            <button className="hamburger-icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
                <div />
                <div />
                <div />
            </button>


            {isOpen && (
                <div className="hamburger-overlay">
                    <button className="close-button" onClick={() => setIsOpen(false)} aria-label="Close menu">&times;</button>
                    <nav className="hamburger-nav">
                        <p onClick={() => handleHamburgerNavigate('/')} className={`hamburger-option` + (location.pathname === '/' ? ' selected' : '')}><b>Home</b></p>
                        <p onClick={() => handleHamburgerNavigate('/about')} className={`hamburger-option` + (location.pathname === '/about' ? ' selected' : '')}><b>About</b></p>
                        <p onClick={() => handleHamburgerNavigate('/services')} className={`hamburger-option` + (location.pathname === '/services' ? ' selected' : '')}><b>Services</b></p>
                        <div className='call-to-action menu-option'>
                            <p onClick={() => handleHamburgerNavigate('/contact')} className={`hamburger-option` + (location.pathname === '/contact' ? ' selected' : '')}><b>Contact Us</b></p>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
