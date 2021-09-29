import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

    render() {
        return (
            <div>
                <div className="logo">
                    <Link to="/">
                        <img className="logo"
                            src={window.logoURL}
                            alt="readiscover-logo-image" />
                    </Link>
                </div>
                <h1>404: Page Not Found</h1>
                <Link to="/">Return to Home Page</Link>
            </div>
        )
    }
}

export default NotFound;
