import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

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
            </div>
        )
    }
}

export default MyBooks;