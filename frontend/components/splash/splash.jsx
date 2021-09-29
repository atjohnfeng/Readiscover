import React from 'react';
import SignupContainer from '../signup/signup_container';
import LoginContainer from '../login/login_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
            <div>
                Readiscover the joy of reading &amp; <Link to="/signup">Sign up</Link>
                <br />
                Already a member? <Link to="/login">Sign in</Link>
            </div>
        )
    }

}

export default Splash;