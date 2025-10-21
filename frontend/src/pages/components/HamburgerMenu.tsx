import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/hamburger.css';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
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
                        <p onClick={() => handleNavigate('/')}>Home</p>
                        <p onClick={() => handleNavigate('/about')}>About</p>
                        <p onClick={() => handleNavigate('/services')}>Services</p>
                        <p onClick={() => handleNavigate('/team')}>Team</p>
                        <div className='call-to-action menu-option'>
                            <p onClick={() => handleNavigate('/contact')}>Contact Us</p>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
