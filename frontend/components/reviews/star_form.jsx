import React from 'react';

class StarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getReview(this.props.bookId, this.props.currentUser);
    }

    update() {

    }

    handleSubmit() {

    }

    render() {
        
    }

}