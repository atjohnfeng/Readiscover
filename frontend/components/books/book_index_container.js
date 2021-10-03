import { connect } from 'react-redux';
import BookIndex from './book_index';
import { getBooks } from '../../actions/book_actions';

const mapStateToProps = state => ({
    books: Object.values(state.entities.books)
})

const mapDispatchToProps = dispatch => ({
    getBooks: () => dispatch(getBooks())
})

export default connect(mapStateToProps, null)(BookIndex);