import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, useEffect } from 'react';

import HamburgerMenu from './HamburgerMenu';

import "../../style/header.css"

export default function Header() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [headerOpaque, setHeaderOpaque] = useState(false);

    const location = useLocation();
    const { scrollY } = useScroll();

    

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (location.pathname !== '/') {
            setHeaderOpaque(true);
            return;
        }

        setHeaderOpaque(latest > window.innerHeight * 0.3);
    })

    useEffect(() => {
        if (location.pathname !== '/') {
            setHeaderOpaque(true);   
        }
        

    }, []);

    function handleNavigate(path: string) {
        if (location.pathname === path) return;
        if (path === '/') {
            setHeaderOpaque(false);
        } else {
            setHeaderOpaque(true);
        }
        
        navigate(path);
    }



    return (
        <motion.header id='header'
            className={headerOpaque ? 'header-opaque' : 'header-transparent'}
        >
            <div id="header-logo">
                <img src="../assets/White_Logo.png" alt="MP Partners Logo" />
            </div>
            {isMobile ? (
                <HamburgerMenu handleNavigate={handleNavigate}/>
            ) : (
                <nav id='menu-desktop'>
                    <div className={`menu-option` + (location.pathname === '/' ? ' selected' : '')} onClick={() => handleNavigate('/')}>
                        <p><b>Home</b></p>
                    </div>

                    <div className={`menu-option` + (location.pathname === '/about' ? ' selected' : '')} onClick={() => handleNavigate('/about')}>
                        <p><b>About</b></p>
                    </div>

                    <div className={`menu-option` + (location.pathname === '/services' ? ' selected' : '')} onClick={() => handleNavigate('/services')}>
                        <p><b>Services</b></p>
                    </div>


                    <div className={`call-to-action menu-option` + (location.pathname === '/contact' ? ' selected' : '')} onClick={() => handleNavigate('/contact')}>
                        <p><b>Contact Us</b></p>
                    </div>
                </nav>
            )}
        </motion.header>
    )
}
