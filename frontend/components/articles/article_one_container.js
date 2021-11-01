import { connect } from 'react-redux';
import { getBooks } from '../../actions/book_actions';
import ArticleOne from './article_one';

const mapStateToProps = state => ({
    books: state.entities.books
})

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(getBooks())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOne);