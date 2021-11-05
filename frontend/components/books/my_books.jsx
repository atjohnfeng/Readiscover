import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class MyBooks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: null
        }
    }

    componentDidMount() {
        this.props.getBookshelf(this.props.currentUser)
    }

    renderBooks() {
        const shelved = this.props.bookshelf;
        let filteredBooks;
        if (!this.state.filter) {
            filteredBooks = shelved
        } else {
            filteredBooks = shelved.filter(book => {
                return book.shelf === this.state.filter;
            })
        }

        if (!filteredBooks) {
            return <h1>{this.state.filter ? this.state.filter : 'All'}</h1>;
        }

        return (
            <div>
                <h1>{this.state.filter ? this.state.filter : 'All'}</h1>
                <ul className="book-index-list">
                    {filteredBooks.map((book, i) =>
                        <li key={`book-${i}`}>
                            <Link to={`/books/${book.book_id}`}>
                                <img className="book-index-book-cover"
                                    src={book.book_cover}
                                    alt={book.book_title} />
                            </Link>
                        </li>)}
                </ul>
            </div>
        )
    }

    setFilter(filter) {
        if (filter === 'All') {
            this.setState({
                filter: null
            })
        } else {
            this.setState({
                filter: filter
            })
        }
    }

    render() {
        return (
            <div>
                <div className="header-div"><NavbarContainer /></div>
                <div className="my-books-container">
                        <Link to='/mybooks' className="my-books-link">My Books</Link>
                    <div className="my-books-div">
                        <div className="my-books-filters">
                            <ul>
                                <h2>Bookshelves</h2>
                                <li onClick={() => this.setFilter('All')}>All</li>
                                <li onClick={() => this.setFilter('Read')}>Read</li>
                                <li onClick={() => this.setFilter('Currently Reading')}>Currently Reading</li>
                                <li onClick={() => this.setFilter('Want to Read')}>Want to Read</li>
                            </ul>
                        </div>
                        <div className="my-books">
                            {this.renderBooks()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBooks;