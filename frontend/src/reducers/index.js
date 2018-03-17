import K from '../utils/constants';

export const

    category = (state={}, action) => {
        const { name, path } = action;
        switch(action.type){
            case K.ADD_CATEGORY:
                return {
                    name,
                    path
                };
            default:
                return state;
        }
    },

    categories = (state=[], action) => {
        switch(action.type){
            case K.ADD_CATEGORY:
                return [
                    ...state,
                    category({}, action)
                ];
            default:
                return state;
        }
    },

    post = (state={}, action) => {
        const { id, timestamp, title, body, author, category, voteScore, deleted, commentCount } = action;
        switch(action.type){
            case K.ADD_POST:
                return {
                    id,
                    timestamp,
                    title,
                    body,
                    author,
                    category,
                    voteScore,
                    deleted,
                    commentCount
                };
            case K.EDIT_POST:
                return (state.id !== id) ?
                    state :
                    {
                        ...state,
                        timestamp,
                        title,
                        body,
                        author,
                        category,
                    };
            case K.POST_VOTE_SCORE:
                return (state.id !== id) ?
                    state :
                    {
                        ...state,
                        voteScore
                    };
            case K.ADD_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        id,
                        commentCount: state.commentCount+1
                    };
            case K.DELETE_POST:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        deleted
                    };
            case K.DELETE_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        id,
                        commentCount: state.commentCount-1
                    };
            default:
                return state;
        }
    },

    posts = (state=[], action) => {
        switch(action.type){
            case K.ADD_POST:
                return [
                    ...state,
                    post({}, action)
                ];
            case K.EDIT_POST:
            case K.DELETE_POST:
            case K.POST_VOTE_SCORE:
            case K.ADD_COMMENT:
            case K.DELETE_COMMENT:
                return state.map(
                    p => post(p, action)
                );
            default:
                return state;
        }
    },

    comment = (state={}, action) => {
        const {id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted} = action;
        switch(action.type){
            case K.ADD_COMMENT:
                return {
                    id,
                    parentId,
                    timestamp,
                    body,
                    author,
                    voteScore,
                    deleted,
                    parentDeleted
                };
            case K.EDIT_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        parentId,
                        timestamp,
                        body,
                        author,
                        voteScore,
                        deleted,
                        parentDeleted
                    };
            case K.DELETE_COMMENT:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        deleted,
                    };
            case K.COMMENT_VOTE_SCORE:
                return state.id !== id ?
                    state :
                    {
                        ...state,
                        voteScore
                    };
            default:
                return state;
        }
    },

    comments = (state=[], action) => {
        switch(action.type){
            case K.ADD_COMMENT:
                return [
                    ...state,
                    comment({}, action)
                ];
            case K.EDIT_COMMENT:
            case K.DELETE_COMMENT:
            case K.COMMENT_VOTE_SCORE:
                return state.map(
                    c => comment(c, action)
                );
            default:
                return state;
        }
    },

    sort = (state=K.SORTED_BY_VOTE_SCORE, action) => {
        const { sortBy } = action;
        switch(action.type){
            case K.SORT_POSTS:
                return sortBy;
            default:
                return state;
        }
    };