import { connect } from 'react-redux';
import ArticleOne from './article_one';

const mapStateToProps = state => ({
    books: Object.values(state.entities.books)
})

export default connect(mapStateToProps, null)(ArticleOne);