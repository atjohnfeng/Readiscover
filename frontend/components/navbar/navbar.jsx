import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav-bar">
                <ul className="nav-bar-list">
                    <li className="nav-bar-logo">
                        <Link to="/">
                            <img className="logo"
                                src={window.logoURL}
                                alt="readiscover-logo-image" />
                        </Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to='/mybooks'>My Books</Link>
                    </li>
                    <li className="nav-image-link">
                        <a href="#">Github</a>
                    </li>
                    <li className="nav-image-link">
                        <a href="#">LinkedIn</a>
                    </li>
                    <li className="nav-image-link">
                        <Link to="/home">
                            Profile Image
                        </Link>
                    </li>
                    <li className="logout">
                        <button onClick={this.props.logout}>Sign Out</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;