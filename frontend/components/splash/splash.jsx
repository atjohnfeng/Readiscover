import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <Link to="/">
                    <img className="logo"
                        src={window.logoURL}
                        alt="readiscover-logo-image" />
                </Link>
                <div>
                    Readiscover the joy of reading &amp; <Link to="/signup">Sign up</Link>
                    <br />
                    Already a member? <Link to="/login">Sign in</Link>
                </div>
            </div>
        )
    }

}

export default Splash;