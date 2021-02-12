import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { auth } from '../../../service/Firebase';
import NavBar from '../../NavBar/NavBar';

import './ProfileScreen.css';

const ProfileScreen= () => {
    const user = useSelector(selectUser);
    
    return (
        <div className="profileScreen">
            <NavBar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" 
                        alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{ user.email }</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3> 
                            <button 
                                onClick={() => auth.signOut()}
                                className="profileScreen__signout"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
