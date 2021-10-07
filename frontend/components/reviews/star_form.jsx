import React from 'react';

class StarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            book_id: this.props.bookId,
            user_id: this.props.currentUser,
            formType: 'create'
        }
        this.updateRating = this.updateRating.bind(this);
    }

    componentDidMount() {
        if (!this.props.getReview(this.props.bookId, this.props.currentUser)) {
            return null;
        } else {
            review = this.props.getReview(this.props.bookId, this.props.currentUser)
        }
        if (review) {
            this.setState({
                title: review.title,
                body: review.body,
                rating: review.rating,
                formType: 'edit',
            })
        }
    }

    updateRating(value) {
        const review = {
            rating: value,
            book_id: this.props.bookId,
            user_id: this.props.currentUser
        }
        debugger
        if (this.state.formType === 'create') {
            this.props.createReview(review);
        } else if (this.state.formType === 'edit') {
            this.props.editReview(review)
        }
    }


    render() {
        if (!this.props.bookId) {
            return null;
        }

        return (
            <div className="star-rating-form-container">
                <form className="star-rating-form">
                    <span onClick={() => this.updateRating(1)} className="fa fa-star" />
                    <span onClick={() => this.updateRating(2)} className="fa fa-star" />
                    <span onClick={() => this.updateRating(3)} className="fa fa-star" />
                    <span onClick={() => this.updateRating(4)} className="fa fa-star" />
                    <span onClick={() => this.updateRating(5)} className="fa fa-star" />
                </form>
            </div>
        )
    }
}

export default StarForm;