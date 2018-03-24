import React from 'react';
import PropTypes from 'prop-types';
import {List, ListSubheader} from 'material-ui';
import CommentItem from "../CommentItem";

const Comments = ({comments, onOpenForm, onPositiveComment, onNegativeComment, onDeleteComment}) => (
    <List subheader={<ListSubheader>{comments.length} Comments</ListSubheader>}>
        {comments.map( comment =>
            <CommentItem
                key={comment.id}
                comment={comment}
                onOpenForm={onOpenForm}
                onPositiveComment={onPositiveComment}
                onNegativeComment={onNegativeComment}
                onDeleteComment={onDeleteComment}
            />
        )}
    </List>
);

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired
    })).isRequired,
    onOpenForm: PropTypes.func.isRequired,
    onPositiveComment: PropTypes.func.isRequired,
    onNegativeComment: PropTypes.func.isRequired,
    onDeleteComment: PropTypes.func.isRequired
};

Comments.defaultProps = {
    comments: [],
    onOpenForm: f=>f,
    onPositiveComment: f=>f,
    onNegativeComment: f=>f,
    onDeleteComment: f=>f
};

export default Comments;