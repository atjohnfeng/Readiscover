import React from 'react';
import SignupContainer from '../signup/signup_container';
import LoginContainer from '../login/login_container';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <SignupContainer />
                <LoginContainer />
            </div>
        )
    }

}

export default Splash;