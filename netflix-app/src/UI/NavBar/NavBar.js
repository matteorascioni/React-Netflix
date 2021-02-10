import React, { useState, useEffect } from 'react';

import './NavBar.css';

const NavBar = () => {
    // NAVBAR TRANSITION ANIMATION
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className="navbar__content">
                <img 
                    className="navbar__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt=""
                />

                <img 
                    className="navbar__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt=""
                />
            </div>    
        </div>
    )
}

export default NavBar;
