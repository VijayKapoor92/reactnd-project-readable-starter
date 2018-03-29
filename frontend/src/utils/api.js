import C from './constants';

const base_url = "http://localhost:3001";
const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Authorization': C.AUTHORIZATION_KEY
};

export const

    getCategories = () =>
        fetch(`${base_url}/categories`, { headers })
            .then(res => res.json()),

    getPosts = () =>
        fetch(`${base_url}/posts`, { headers })
            .then(res => res.json()),

    addPost = post =>
        fetch(`${base_url}/posts`, { headers, method: 'POST', body: JSON.stringify(post) })
            .then(res => res.json()),

    editPost = post =>
        fetch(`${base_url}/posts/${post.id}`, { headers, method: 'PUT', body: JSON.stringify(post) })
            .then(res => res.json()),

    votePost = (id, option) =>
        fetch(`${base_url}/posts/${id}`, { headers, method: 'POST', body: JSON.stringify({option}) })
            .then(res => res.json()),

    deletePost = id =>
        fetch(`${base_url}/posts/${id}`, { headers, method: 'DELETE' })
            .then(res => res.json()),

    getCommentsByPost = id =>
        fetch(`${base_url}/posts/${id}/comments`, { headers })
            .then(res => res.json()),

    addComment = comment =>
        fetch(`${base_url}/comments`, { headers, method: 'POST', body: JSON.stringify(comment) })
            .then(res => res.json()),

    editComment = comment =>
        fetch(`${base_url}/comments/${comment.id}`, { headers, method: 'PUT', body: JSON.stringify(comment) })
            .then(res => res.json()),

    deleteComment = id =>
        fetch(`${base_url}/comments/${id}`, { headers, method: 'DELETE' })
            .then(res => res.json()),

    voteComment = (id, option) =>
        fetch(`${base_url}/comments/${id}`, { headers, method: 'POST', body: JSON.stringify({option}) })
            .then(res => res.json())
;