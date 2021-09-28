import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

    render() {
        return (
            <div>
                <h1>404: Page Not Found</h1>
                <Link to="/">Return to Home Page</Link>
            </div>
        )
    }
}

export default NotFound;
