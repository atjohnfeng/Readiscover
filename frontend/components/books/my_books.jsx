import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class MyBooks extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getBookshelf(this.props.currentUser)
    }

    render() {
        return (
            <div>
                <div className="header-div"><NavbarContainer /></div>
                <div className="my-books-container">
                    <Link to='/mybooks' className="my-books-link">My Books</Link>
                    <div>
                        <div className="my-books-filters">
                            <ul>
                                <h2>Bookshelves</h2>
                                <li>All</li>
                                <li>Read</li>
                                <li>Currently Reading</li>
                                <li>Want to Read</li>
                            </ul>
                        </div>
                        <div className="my-books">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBooks;