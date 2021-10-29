import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            title: '',
            body: '',
            book_id: this.props.bookId,
            user_id: this.props.currentUser,
            formType: 'Create',
            reviewId: null
        }
    }

    componentDidMount() {
        this.props.getReview(this.props.bookId, this.props.currentUser).then(
            payload => {
                let review = Object.values(payload.review);
                if (review.length > 0) {
                    this.setState({
                        rating: review[0].rating,
                        formType: 'Edit',
                        title: review[0].title,
                        body: review[0].body,
                        reviewId: review[0].id
                    })
                }
            }
        );
    }

    handleSubmit() {
        const review = {
            rating: this.state.rating,
            book_id: this.props.bookId,
            user_id: this.props.currentUser,
            title: this.state.title,
            body: this.state.body
        }
        if (this.state.formType === 'create') {
            this.props.createReview(review);
        } else {
            this.props.editReview(review, this.state.reviewId);
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

    updateRating(value) {
        this.setState({
            rating: value
        })
    }

    render() {
        if (!this.props.bookId) {
            return null;
        }

        return (
            <div>
                <div className="header-div"><NavbarContainer /></div>
                <header> 
                    <Link to={`/books/${this.props.bookId}`}>Link</Link> > Review > {this.state.formType}
                </header>
                    <div className="star-rating-form">
                        <span onClick={() => this.updateRating(5)} className={this.renderStar(5)} />
                        <span onClick={() => this.updateRating(4)} className={this.renderStar(4)} />
                        <span onClick={() => this.updateRating(3)} className={this.renderStar(3)} />
                        <span onClick={() => this.updateRating(2)} className={this.renderStar(2)} />
                        <span onClick={() => this.updateRating(1)} className={this.renderStar(1)} />
                        My rating:
                    </div>
            </div>
        )
    }
}

export default ReviewForm;