import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../signup/signup_container';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <SignupContainer />
            </div>
        )
    }

}

export default Splash;