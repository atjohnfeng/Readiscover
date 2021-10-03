import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    renderDropdown() {
        if (!!this.props.currentUser) {
            return (
                <ul className="dropdown-content">
                    <li className="welcome-greeting">
                        Welcome {this.props.currentUser.username}!
                    </li>
                    <li>
                        <button onClick={this.props.logout}
                        className="logout-button">Sign Out</button>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="dropdown-content">
                    <li className="login-dropdown-item">
                        <Link to="/login">
                            Log in
                        </Link>
                    </li>
                    <li className="signup-dropdown-item">
                        <Link to="/signup">
                            Sign up
                        </Link>
                    </li>
                </ul>
            )
        }
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
                        <Link to='/home' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to='/books' className="nav-link">All Books</Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to='/mybooks' className="nav-link">My Books</Link>
                    </li>
                    <li className="search-bar">
                        <input type="text" placeholder="Search books" />
                        <button type="submit" className="search-icon">
                            <i className="fa fa-search"></i>
                        </button>
                    </li>
                    <li className="nav-image-link">
                        <a href="https://github.com/atjohnfeng/"
                            target="_blank ">
                            <img src={window.githubLogo}
                                alt="github-logo-link"
                                className="nav-bar-icon" />
                        </a>
                    </li>
                    <li className="nav-image-link">
                        <a href="https://www.linkedin.com/in/john-feng-316220215/"
                            target="_blank">
                            <img src={window.linkedLogo}
                                alt="linkedin-logo-link" 
                                className="nav-bar-icon" />
                        </a>
                    </li>
                    <li className="dropdown">
                        <button id="dropdown">
                            <img src={window.navProfileDefault}
                                alt="profile-default-nav" 
                                className="nav-bar-icon" />
                        </button>
                        {this.renderDropdown()}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;