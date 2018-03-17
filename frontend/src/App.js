import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import sortBy from 'sort-by';

import HomeView from './views/HomeView';
import CategoryView from './views/CategoryView';
import PostView from './views/PostView';
import EditPostView from './views/EditPostView';


import { sortPosts } from './actions/sync/';
import { fetchCategories, fetchPosts, votePost, voteComment } from './actions/async/';

import K from "./utils/constants";

const sortOptions = [
    {value:K.SORTED_BY_DATE, text:'Date'},
    {value:K.SORTED_BY_VOTE_SCORE, text:'Score'},
];

class App extends Component{

    constructor(props){
        super(props);
    }

    /*
    * This is the only lifecycle hook called on server rendering.
    * */

    componentWillMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    render(){
        const { posts = {}, categories, sort, onSortBy, onPositivePost, onNegativePost, onPositiveComment, onNegativeComment } = this.props;
        const sortedPosts = posts.sort(sortBy(sort));

        return (
            <Fragment>
                <Route
                    exact path="/"
                    render={ () => (
                        <HomeView />
                    )}
                />
                <Route
                    path="/category"
                    render={() => (
                        <CategoryView />
                    )}
                />
                <Route
                    path="/post"
                    render={ () =>
                        <PostView />
                    }
                />
                <Route
                    path="/form"
                    component = { EditPostView }
                />
            </Fragment>
        );
    }
}

const mapStateToProps = ({posts, categories, sort}) => ({
    posts: posts.filter(post => post.deleted === false),
    categories,
    sort,
});

const mapDispatchToProps = dispatch => ({
    onLoadCategories: () => dispatch(fetchCategories()),
    onLoadPosts: () => dispatch(fetchPosts()),
    onSortBy: sortBy => dispatch(sortPosts(sortBy)),
    onPositivePost: ({id}) => dispatch(votePost(id, "upVote")),
    onNegativePost: ({id}) => dispatch(votePost(id, "downVote")),
    onPositiveComment: ({id}) => dispatch(voteComment(id, "upVote")),
    onNegativeComment: ({id}) => dispatch(voteComment(id, "downVote"))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));