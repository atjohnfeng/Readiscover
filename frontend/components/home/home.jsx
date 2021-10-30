import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <Redirect to="/books" /> */}
                <div className="header-div"><NavbarContainer /></div>
                    <div className="home">
                        <div className="home-content-container">
                            <div className="users-reviews">
                                
                            </div>
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }
}

export default Home;