import React from 'react';
import NavbarContainer from '../navbar/navbar_container';


class NotFound extends React.Component {

    render() {
        return (
            <div>
                <div className="header-div">
                    <NavbarContainer />
                </div>
                    <div className="book-index">
                        <div className="404-not-found">
                            <h1>404: Page Not Found</h1>
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }
}

export default NotFound;
