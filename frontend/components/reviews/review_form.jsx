import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            spoilerFlag: false,
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
                        spoilerFlag: review[0].spoiler_flag,
                        reviewId: review[0].id
                    })
                    if (review[0].body) {
                        this.setState({
                            body: review[0].body,
                        })
                    }
                } else {
                    this.setState({
                        formType: 'Create'
                    })
                }
            }
        );
    }

    componentWillUnmount() {
        this.props.reset();
        this.props.resetErrors();
    }

    handleSubmit() {
        const review = {
            rating: this.state.rating,
            book_id: this.props.bookId,
            user_id: this.props.currentUser,
            spoiler_flag: this.state.spoilerFlag,
            body: this.state.body
        }
        if (this.state.formType === 'Create') {
            this.props.createReview(review);
        } else {
            this.props.editReview(review, this.state.reviewId).then(payload => {
                if (payload.type === 'RECEIVE_REVIEW') {
                    this.props.history.push(`/books/${this.props.bookId}`)
                }
            });
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

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        return (
            <ul className="error-list">
                {this.props.errors.map((error, i) =>
                    <li className="form-error" 
                        key={`error-${i}`}>{error}</li>)}
            </ul>
        )
    }

    updateSpoilerTag() {
        if (this.state.spoilerFlag) {
            console.log(this.state.spoilerFlag)
            this.setState({
                spoilerFlag: false
            });
        } else {
            console.log(this.state.spoilerFlag)
            this.setState({
                spoilerFlag: true
            });
        }
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
            <div>
                <div className="header-div"><NavbarContainer /></div>
                <div className="review-form-container">
                    <header> 
                        <Link to={`/books/${this.props.bookId}`}>{title}
                        </Link> &gt; Review &gt; {this.state.formType}
                    </header>
                    <div className="book-info">
                        <figure>
                            <img src={cover} alt={`${title}-cover`} 
                                className="review-cover"/>
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
                                'Enter your review (optional)' : 
                                this.state.body}
                                value={this.state.body}
                                onChange={this.update('body')}>
                                </textarea>
                        </div>
                        <div className="spoiler-box">
                            <input type="checkbox"
                                onChange={() => this.updateSpoilerTag()}
                                checked={this.state.spoilerFlag ? 
                                    this.state.spoilerFlag : false} />
                            <h3>Hide entire review because of spoilers</h3>
                        </div>
                        <div>
                            <button onClick={() => this.handleSubmit()}>
                                Post</button>
                        </div>
                        {this.renderErrors()}
                        <div>
                            <button className="remove-button" disabled>
                                Remove from my books
                            </button>
                        </div>
                </div>
            </div>
        )
    }
}

export default ReviewForm;