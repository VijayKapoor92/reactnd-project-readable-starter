import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from "material-ui/styles/index";
import { findById } from "../../utils";
import { createPost, updatePost } from "../../actions/async/";
import classes from "../../styles";
import PostForm from "../../components/Form";

const mapStateToProps = ({ posts, categories }, { match, history }) => {
    const { id, author, title, body, category } = match.params.id ? findById(posts, match.params.id) : {};
    return ({
        id,
        author,
        title,
        body,
        category,
        history,
        categories
    })
};

const mapDispatchToProps = dispatch => ({
    onCreatePost: ({title, author, body, category}) => dispatch(createPost({title, author, body, category})),
    onUpdatePost: (post) => dispatch(updatePost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(classes)(PostForm)));