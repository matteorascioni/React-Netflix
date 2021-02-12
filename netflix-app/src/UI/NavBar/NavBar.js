import React, { useState, useEffect, } from 'react';
import { useHistory } from 'react-router-dom';

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

    // HISTORY REACT-ROUTER
    const history = useHistory(false);

    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className="navbar__content">
                <img 
                    onClick={() => history.push('/')}
                    className="navbar__logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt=""
                />

                <img 
                    onClick={() => history.push('/profile')}
                    className="navbar__avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt=""
                />
            </div>    
        </div>
    )
}

export default NavBar;
