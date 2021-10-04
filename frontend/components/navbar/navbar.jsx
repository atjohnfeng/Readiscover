import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }

        this.resetNavbar = this.resetNavbar.bind(this);
    }

    componentDidMount() {
        this.props.getBooks();
    }

    update() {
        return e => {
            this.setState({
                searchString: e.target.value
            });
        }
    }

    resetNavbar() {
        this.setState({
            searchString: ''
        })
        console.log(this.state);
    }

    renderSearch() {
        let filteredBooks;
        const searchString = this.state.searchString;
        if (searchString.length >= 1) {
            filteredBooks = this.props.books.filter(book => {
                return book.title.toLowerCase().includes(searchString.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchString.toLowerCase());})
                } 
        if (!!filteredBooks) {
            return (
                <ul className="search-results">
                    {filteredBooks.map((book, i) => (
                        <Link to={`/books/${book.id}`}
                            key={`result-${i}`}
                            className="search-result-link">
                            <li className="search-result" onClick={this.resetNavbar}>
                                <div className="search-result-img">
                                    <img src={book.cover_img_url} 
                                    alt={book.title} 
                                    className="search-result-img" />
                                </div>
                                <div className="search-result-info">
                                    <h1>{book.title}</h1>
                                    <h2>by {book.author}</h2>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            )
        }
    }

    renderDropdown() {
        if (!!this.props.currentUser) {
            return (
                <ul className="dropdown-content">
                    <li className="welcome-greeting">
                        {this.props.currentUser.username}
                    </li>
                    <li className="li-dropdown-link">
                        <Link to="/books" className="dropdown-link">
                            All Books
                        </Link>
                    </li>
                    <li className="li-dropdown-link">
                        <Link to="/mybooks" className="dropdown-link">
                            My Books
                        </Link>
                    </li>
                    <li className="li-dropdown-link">
                        <Link to="/theend" className="dropdown-link">
                            Take a Trip to The End of the Sidewalk
                        </Link>
                    </li>
                    <li className="li-dropdown-link">
                        <button onClick={this.props.logout}
                        className="dropdown-button">Sign Out</button>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="dropdown-content">
                    <li className="li-dropdown-link">
                        <Link to="/login" className="dropdown-link">
                            Log in
                        </Link>
                    </li>
                    <li className="li-dropdown-link">
                        <Link to="/signup" className="dropdown-link">
                            Sign up
                        </Link>
                    </li>
                    <li className="li-dropdown-link">
                        <Link to="/theend" className="dropdown-link">
                            The End?
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
                        <Link to='/books' className="nav-link">allBooks</Link>
                    </li>
                    <li className="nav-bar-link">
                        <Link to='/mybooks' className="nav-link">myBooks</Link>
                    </li>
                    <li className="search-bar">
                        <input type="text" placeholder="Search books"
                            value={this.state.searchString}
                            id="search-bar" onChange={this.update()}/>
                        {this.renderSearch()}
                    </li>
                    <button type="submit" className="search-icon">
                        <i className="fa fa-search"></i>
                    </button>
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