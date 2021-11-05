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
                    <Link to="/home" className="dropdown-link">
                        <li className="li-dropdown-link">
                            Home
                        </li>
                    </Link>
                    <Link to="/books" className="dropdown-link">
                        <li className="li-dropdown-link">
                            All Books
                        </li>
                    </Link>
                    <Link to="/mybooks" className="dropdown-link">
                        <li className="li-dropdown-link">
                            My Books
                        </li>
                    </Link>
                    <Link to="/theend" className="dropdown-link">
                        <li className="li-dropdown-link">
                            Take a Trip to The End of the Sidewalk
                        </li>
                    </Link>
                    <div className="dropdown-link">
                        <li className="li-dropdown-link" onClick={this.props.logout}>
                            Sign Out
                        </li>
                    </div>
                </ul>
            )
        } else {
            return (
                <ul className="dropdown-content">
                    <Link to="/login" className="dropdown-link">
                        <li className="li-dropdown-link">
                            Log in
                        </li>
                    </Link>
                    <Link to="/signup" className="dropdown-link">
                        <li className="li-dropdown-link">
                            Sign up
                        </li>
                    </Link>
                    <Link to="/theend" className="dropdown-link">
                        <li className="li-dropdown-link">
                            Take a Trip to The End of the Sidewalk
                        </li>
                    </Link>
                </ul>
            )
        }
    }

    render() {
        if ($(window).width() <= 1200) {
            const footer = document.getElementById('footer');
            footer.innerHTML = '<a href="/">hello</a>'
        }

        return (
            <div className="nav-bar">
                <ul className="nav-bar-list">
                    <Link to="/">
                        <li className="nav-bar-logo">
                                <img className="logo"
                                    src={window.logoURL}
                                    alt="readiscover-logo-image" />
                        </li>
                    </Link>
                    <Link to='/home' className="nav-link">
                        <li className="nav-bar-link">
                            Home
                        </li>
                    </Link>
                    <Link to='/books' className="nav-link">
                        <li className="nav-bar-link">
                            allBooks
                        </li>
                    </Link>
                    <Link to='/mybooks' className="nav-link">
                        <li className="nav-bar-link">
                            myBooks
                        </li>
                    </Link>
                    <li className="search-bar">
                        <input type="text" placeholder="Search books"
                            value={this.state.searchString}
                            id="search-bar" onChange={this.update()}/>
                        {this.renderSearch()}
                    </li>
                    <button type="submit" className="search-icon">
                        <i className="fa fa-search"></i>
                    </button>
                    <a href="https://github.com/atjohnfeng/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-image-link">
                        <li className="nav-image-link">
                                <img src={window.githubLogo}
                                    alt="github-logo-link"
                                    className="nav-bar-icon" />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/atjohnfeng/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-image-link">
                        <li className="nav-image-link">
                                <img src={window.linkedLogo}
                                    alt="linkedin-logo-link" 
                                    className="nav-bar-icon" />
                        </li>
                    </a>
                    <li className="dropdown">
                        <button id="dropdown">
                            <img src={window.navProfileDefault}
                                alt="profile-default-nav" 
                                className="nav-bar-icon" />
                        </button>
                        {this.renderDropdown()}
                    </li>
                    <li className="hidden-li" />
                </ul>
            </div>
        )
    }
}

export default Navbar;