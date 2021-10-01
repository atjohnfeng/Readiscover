import React from 'react';
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
                    <div className="home-content-container">
                        Welcome to your home page, {this.props.currentUser.username}!
                        <br />
                        Visit 'All Books' to view all books in our database.
                        <br />
                        Under Construction.
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;