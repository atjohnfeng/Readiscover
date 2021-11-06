import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Splash extends React.Component {

    render() {
        return (
            <div>
                <Redirect to="/books" />
                <Link to="/">
                    <img className="logo"
                        src={window.logoURL}
                        alt="readiscover-logo-image" />
                </Link>
                <div>
                    Readiscover the joy of reading &amp; <Link to="/signup">Sign up</Link>!
                    <br />
                    <br />
                    Already a member? <Link to="/login">Sign in</Link>!
                    <br />
                    <br />
                    Browse our books <Link to="/books">here</Link>.
                    <br />
                    <br />
                    Under construction.
                </div>
            </div>
        )
    }

}

export default Splash;