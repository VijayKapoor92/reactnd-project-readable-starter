import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import ItemPost from "../ItemPost";
import { findByPath } from "../../utils";

const Posts = ({posts, categories, onPositivePost, onNegativePost}) => (
    <List>
        { posts.map(
            ({id, author, title, timestamp, voteScore, commentCount, category}) =>
                <ItemPost
                    category={findByPath(categories, category)}
                    key={id}
                    id={id}
                    author={author}
                    title={title}
                    date={timestamp}
                    voteScore={voteScore}
                    commentCount={commentCount}
                    onPositivePost={onPositivePost}
                    onNegativePost={onNegativePost}
                />)
        }
    </List>
);

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    })).isRequired,
    categories: PropTypes.array.isRequired,
    onPositivePost: PropTypes.func.isRequired,
    onNegativePost: PropTypes.func.isRequired
};

Posts.defaultProps = {
    posts: [],
    categories: [],
    onPositivePost: f=>f,
};

export default Posts;