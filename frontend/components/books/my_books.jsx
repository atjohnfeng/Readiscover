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
                                <li>Read</li>
                                <li>Currently Reading</li>
                                <li>Want to Read</li>
                            </ul>
                        </div>
                        <div className="my-books">
                            wahwah
                            {this.renderBooks()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBooks;