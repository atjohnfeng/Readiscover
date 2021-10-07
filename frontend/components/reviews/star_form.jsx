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
        const reviews = Object.values(this.props.reviews);
        let userReview;
        reviews.forEach(review => {
            if (review.user_id === this.props.currentUser) {
                userReview = review;
            }
        })
        if (userReview) {
            this.setState({
                rating: userReview.rating,
                formType: 'edit'
            })
        }
        console.log(this.state);
    }

    updateRating(value) {
        const review = {
            rating: value,
            book_id: this.props.bookId,
            user_id: this.props.currentUser
        }
        if (this.state.formType === 'create') {
            this.props.createReview(review);
        } else if (this.state.formType === 'edit') {
            this.props.editReview(review)
        }
    }

    renderStar(value) {
        if (value <= this.state.rating && this.state.rating !== '') {
            return (
                "fa fa-star checked"
            )
        } else {
            return (
                "fa fa-star"
            )
        }
    }

    render() {
        if (!this.props.bookId) {
            return null;
        }

        return (
            <div className="star-rating-form-container">
                <form className="star-rating-form">
                    <span onClick={() => this.updateRating(1)} className={this.renderStar(1)} />
                    <span onClick={() => this.updateRating(2)} className={this.renderStar(2)} />
                    <span onClick={() => this.updateRating(3)} className={this.renderStar(3)} />
                    <span onClick={() => this.updateRating(4)} className={this.renderStar(4)} />
                    <span onClick={() => this.updateRating(5)} className={this.renderStar(5)} />
                </form>
            </div>
        )
    }
}

export default StarForm;