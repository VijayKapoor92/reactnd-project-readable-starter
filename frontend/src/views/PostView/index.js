import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import { filterArrayByParentId, findById } from "../../utils";
import sortBy from 'sort-by';
import Detalhes from '../../components/Detalhes';
import CommentForm from "../../components/CommentForm";
import styles from '../../styles';
import K from "../../utils/constants";
import {createComment, removeComment, updateComment, removePost} from "../../actions/async/";

class PostView extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_open_comment_form: false,
            edit_comment : {}
        };
    }

    toggleCommentForm = is_open_comment_form =>
        this.setState({is_open_comment_form});

    handleSubmitComment = ({id, author, body}) => {
        const { onCreateComment, onUpdateComment, post } = this.props;
        id === null ?
            onCreateComment({author, body, parentId:post.id}) :
            onUpdateComment({id, author, body});
    };

    handleOpenForm = (comment={}) => {
        this.setState({
            is_open_comment_form:true,
            edit_comment: comment
        });
    };

    handleDeletePost = post => {
        const { history, onDeletePost } = this.props;
        onDeletePost(post);
        history.go(-1);
    };

    render(){
        const { is_open_comment_form, edit_comment } = this.state;
        return (
            <Fragment>
                <CommentForm
                    open={is_open_comment_form}
                    comment={edit_comment}
                    onClose={()=>this.toggleCommentForm(false)}
                    onSubmit={this.handleSubmitComment}
                />
                <Detalhes
                    {...this.props}
                    onOpenForm={this.handleOpenForm}
                    onDeletePost={this.handleDeletePost}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({posts, comments}, ownProps) => ({
    post: findById(posts, ownProps.id),
    comments: filterArrayByParentId(comments, ownProps.id)
        .filter(comment => comment.deleted === false)
        .sort(sortBy(K.SORTED_BY_VOTE_SCORE)),
    ...ownProps
});

const mapDispatchToProps = dispatch => ({
    onDeletePost: ({id}) => dispatch(removePost(id)),
    onCreateComment: ({author, body, parentId}) => dispatch(createComment({author, body, parentId})),
    onUpdateComment: ({id, author, body}) => dispatch(updateComment({id, author, body})),
    onDeleteComment: ({id}) => dispatch(removeComment(id))
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(PostView);