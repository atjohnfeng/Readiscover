import React from 'react';

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

            </div>
        )
    }
}

export default MyBooks;