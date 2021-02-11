import React from 'react';

import './SignUpScreen.css'

const SignUnScreen = () => {

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email Addres" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix?</span>Sign up now.
                </h4>
            </form>
        </div>
    );
}

export default SignUnScreen;
