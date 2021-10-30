import React from 'react';

class StarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            book_id: this.props.bookId,
            user_id: this.props.currentUser,
            formType: 'create',
            reviewId: null
        }
        this.updateRating = this.updateRating.bind(this);
    }

    componentDidMount() {
        // this.props.getBook(this.props.bookId);
        this.props.getReview(this.props.bookId, this.props.currentUser).then(
            payload => { 
                let review = Object.values(payload.review);
                if (review.length > 0) {
                    this.setState({
                        rating: review[0].rating,
                        formType: 'edit',
                        reviewId: review[0].id
                    }) 
                }
            }
        );
    }

    updateRating(value) {
        const review = {
            rating: value,
            book_id: this.props.bookId,
            user_id: this.props.currentUser,
        }
        if (this.state.formType === 'create') {
            this.props.createReview(review).then(
                payload => {
                    this.setState({
                        reviewId: payload.review.id,
                        rating: payload.review.rating,
                        formType: 'edit'
                    })
                }
            );
        } else if (this.state.formType === 'edit') {
            // console.log(this.state.reviewId)
            this.props.editReview(review, this.state.reviewId);
            this.setState({ rating: review.rating });
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
                    <span onClick={() => this.updateRating(5)} className={this.renderStar(5)} />
                    <span onClick={() => this.updateRating(4)} className={this.renderStar(4)} />
                    <span onClick={() => this.updateRating(3)} className={this.renderStar(3)} />
                    <span onClick={() => this.updateRating(2)} className={this.renderStar(2)} />
                    <span onClick={() => this.updateRating(1)} className={this.renderStar(1)} />
                </form>
            </div>
        )
    }
}

export default StarForm;