import K from '../../utils/constants';

export const

    sortPosts = sortBy => ({
        type: K.SORT_POSTS,
        sortBy
    }),

    addCategory = (name, path) => ({
        type: K.ADD_CATEGORY,
        name,
        path
    }),

    addPost = ({ id, timestamp=Date.now(), title, body, author, category, voteScore=1, deleted=false, commentCount=0 }) => ({
        type: K.ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted,
        commentCount
    }),

    editPost = ({id, timestamp, title, body, author, category}) => ({
        type: K.EDIT_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category
    }),

    deletePost = ({ id, deleted }) => ({
        type: K.DELETE_POST,
        id,
        deleted
    }),

    addCommentPost = id => ({
        type: K.ADD_COMMENT,
        id
    }),

    deleteCommentPost = id => ({
        type: K.DELETE_COMMENT,
        id
    }),

    postVoteScore = ({id, voteScore}) => ({
        type: K.POST_VOTE_SCORE,
        id,
        voteScore
    }),

    addComment = ({id, parentId, timestamp=Date.now(), body, author, voteScore=1, deleted=false, parentDeleted=false}) => ({
        type: K.ADD_COMMENT,
        id,
        parentId,
        timestamp,
        body,
        author,
        voteScore,
        deleted,
        parentDeleted
    }),

    editComment = ({id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted}) => ({
        type: K.EDIT_COMMENT,
        id,
        parentId,
        timestamp,
        body,
        author,
        voteScore,
        deleted,
        parentDeleted
    }),

    deleteComment = ({id}) => ({
        type: K.DELETE_COMMENT,
        id,
        deleted:true
    }),

    commentVoteScore = ({id, voteScore}) => ({
        type: K.COMMENT_VOTE_SCORE,
        id,
        voteScore
    })
;