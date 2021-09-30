import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div className="nav-bar-container">
                    <NavbarContainer />
                </div>
            </div>
        )
    }
}

export default Home;