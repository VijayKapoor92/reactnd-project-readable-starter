import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import ItemPost from "../ItemPost";
import { findByPath } from "../../utils";

const Posts = ({posts, categories, onPositivePost, onNegativePost, onDeletePost}) => (
    <List>
        { posts.map(
            (post) =>
                <ItemPost
                    category={findByPath(categories, post.category)}
                    post={post}
                    key={post.id}
                    id={post.id}
                    author={post.author}
                    title={post.title}
                    date={post.timestamp}
                    voteScore={post.voteScore}
                    commentCount={post.commentCount}
                    onPositivePost={onPositivePost}
                    onNegativePost={onNegativePost}
                    onDeletePost={onDeletePost}
                />)
        }
    </List>
);

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onPositivePost: PropTypes.func.isRequired,
    onNegativePost: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired
};

Posts.defaultProps = {
    posts: [],
    categories: [],
    onPositivePost: f=>f,
    onDeletePost: f=>f
};

export default Posts;