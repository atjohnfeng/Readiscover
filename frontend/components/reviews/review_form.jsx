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
            formType: null,
            reviewId: null,
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
                } else {
                    this.setState({
                        formType: 'Create'
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
        if (this.state.formType === 'Create') {
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
        let title;
        let cover;
        let author;
        if (!this.props.book) {
            title = '';
            cover = '';
            author = '';
        } else {
            title = this.props.book.title;
            cover = this.props.book.cover_img_url;
            author = this.props.book.author;
        }

        return (
            <div className="review-form-container">
                <div className="header-div"><NavbarContainer /></div>
                <header> 
                    <Link to={`/books/${this.props.bookId}`}>{title}</Link> 
                    &gt; Review &gt; {this.state.formType}
                </header>
                <div className="book-info">
                    <figure>
                        <img src={cover} alt={`${title}-cover`} className="review-cover"/>
                    </figure>
                    <figcaption>
                        <h1>{title}</h1>
                        <h2>by {author}</h2>
                    </figcaption>
                </div>
                    <div className="star-rating-form">
                        <button className="clear-button" 
                            onClick={() => this.updateRating('')}>
                                Clear</button>
                        <span onClick={() => this.updateRating(5)} 
                            className={this.renderStar(5)} />
                        <span onClick={() => this.updateRating(4)} 
                            className={this.renderStar(4)} />
                        <span onClick={() => this.updateRating(3)} 
                            className={this.renderStar(3)} />
                        <span onClick={() => this.updateRating(2)} 
                            className={this.renderStar(2)} />
                        <span onClick={() => this.updateRating(1)} 
                            className={this.renderStar(1)} />
                        <h3>My rating:</h3>
                    </div>
                    <div>
                        <h3>Bookshelves/Tags: Under Construction</h3>
                    </div>
                    <div>
                        <h3>What did you think?</h3>
                        <textarea placeholder={this.state.body === '' ? 
                            'Enter your review (optional)' : this.state.body}
                            value={this.state.body}>
                            </textarea>
                    </div>
            </div>
        )
    }
}

export default ReviewForm;