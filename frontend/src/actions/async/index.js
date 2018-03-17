import {
    addCategory,
    addPost,
    editPost,
    deletePost,
    postVoteScore,
    addCommentPost,
    deleteCommentPost,
    addComment,
    editComment,
    deleteComment,
    commentVoteScore
} from '../sync/';
import uniqid from 'uniqid';
import * as API from '../../utils/api';

export const

    fetchCategories = () => dispatch =>
        API.getCategories()
            .then(({ categories }) =>
                categories.map(
                    ({ name, path }) => dispatch(addCategory(name, path))
                )),

    fetchPosts = () => dispatch =>
        API.getPosts()
            .then(posts => posts.map(post => {
                dispatch(addPost(post));
                post.commentCount && dispatch(fetchComments(post.id));
                return post;
            })),

    createPost = ({id=uniqid(), timestamp=Date.now(), title, body, author, category, voteScore=1, deleted=false}) =>
        dispatch => API.addPost({id, timestamp, title, body, author, category, voteScore, deleted })
            .then( post => dispatch(addPost(post)) ),

    updatePost = ({id, timestamp=Date.now(), title, body, author, category}) =>
        dispatch => API.editPost({id, timestamp, title, body, author, category})
            .then( post => dispatch(editPost(post))),

    removePost = id => dispatch =>
        API.deletePost(id)
            .then( post => dispatch(deletePost(post))),

    votePost = (id, vote) =>
        dispatch => API.votePost(id, vote)
            .then( post => dispatch(postVoteScore(post))),

    fetchComments = id => dispatch =>
        API.getCommentsByPost(id)
            .then(comments => comments.map(comment => dispatch(addComment(comment)))),

    createComment = ({id=uniqid(), parentId, timestamp=Date.now(), body, author, voteScore=1, deleted=false, parentDeleted=false}) =>
        dispatch => API.addComment({id,timestamp, body, author, parentId, voteScore, deleted, parentDeleted})
            .then(comment => {
                dispatch(addComment(comment));
                dispatch(addCommentPost(comment.parentId));
                return comment;
            }),

    updateComment = ({id, author, body, timestamp=Date.now()}) => dispatch =>
        API.editComment({id, author, body, timestamp})
            .then( comment => dispatch(editComment(comment))),

    removeComment =  id => dispatch =>
        API.deleteComment(id)
            .then( comment => {
                dispatch(deleteComment(comment));
                dispatch(deleteCommentPost(comment.parentId));
                return comment;
            }),

    voteComment = (id, vote) =>
        dispatch => API.voteComment(id, vote)
            .then( comment => dispatch(commentVoteScore(comment)))
;