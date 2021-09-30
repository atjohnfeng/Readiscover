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
                    </li>
                    <li className="nav-image-link">
                        <a href="https://github.com/atjohnfeng/Readiscover"
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
                    <li className="nav-image-link">
                        <Link to="/home">
                            <img src={window.navProfileDefault}
                                alt="profile-default-nav" 
                                className="nav-bar-icon" />
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