import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import sortBy from 'sort-by';

import Menu from './components/Menu';
import MenuSort from "./components/MenuSort";

import HomeView from './views/HomeView';
import CategoryView from './views/CategoryView';
import PostView from './views/PostView';
import EditPostView from './views/EditPostView';

import { sortPosts } from './actions/sync/';
import { fetchCategories, fetchPosts, votePost, voteComment } from './actions/async/';

import K from "./utils/constants";
import {filterArrayByCategory, findByPath} from "./utils";

const sortOptions = [
    {value: K.SORTED_BY_DATE, text:'Date'},
    {value: K.SORTED_BY_VOTE_SCORE, text:'Score'},
];

const InputProps = {
    disableUnderline: true
};

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            is_open_drawer : false,
            is_open_sort_menu : false
        }
    }

    /*
    * This is the only lifecycle hook called on server rendering.
    * */

    componentDidMount(){
        const { onLoadCategories, onLoadPosts } = this.props;
        onLoadCategories();
        onLoadPosts();
    }

    toggleDrawer = is_open_drawer =>
        this.setState({is_open_drawer});

    toggleSortMenu = is_open_sort_menu =>
        this.setState({is_open_sort_menu});

    render(){
        const { is_open_drawer, is_open_sort_menu } = this.state;
        const { posts = {}, categories, sort, onSortBy, onPositivePost, onNegativePost, onPositiveComment, onNegativeComment } = this.props;
        const sortedPosts = posts.sort(sortBy(sort));

        return (
            <Fragment>
                <Menu
                    open={is_open_drawer}
                    categories={categories}
                    onClose={()=>this.toggleDrawer(false)}
                />
                <MenuSort
                    open={is_open_sort_menu}
                    options={sortOptions}
                    sortBy={sort}
                    onClose={()=>this.toggleSortMenu(false)}
                    onSortBy={onSortBy}
                />
                <Route
                    exact path="/"
                    render={ () => (
                        <HomeView
                            posts={sortedPosts}
                            onOpenDrawer={() => this.toggleDrawer(true)}
                            onOpenSortMenu={() => this.toggleSortMenu(true)}
                            onPositivePost={onPositivePost}
                            onNegativePost={onNegativePost}
                        />
                    )}
                />
                <Route
                    path="/category/:path"
                    render={({match}) => (
                        <CategoryView
                            category={findByPath(categories, match.params.path)}
                            posts={filterArrayByCategory(sortedPosts, match.params.path)}
                            onOpenDrawer={() => this.toggleDrawer(true)}
                            onOpenSortMenu={() => this.toggleSortMenu(true)}
                            onPositivePost={onPositivePost}
                            onNegativePost={onNegativePost}
                        />
                    )}
                />
                <Route
                    path="/post/:id"
                    render={ ({match}) =>
                        <PostView
                            id={match.params.id}
                            onOpenForm= {() => this.toggleCommentForm(true)}
                            onPositivePost={onPositivePost}
                            onNegativePost={onNegativePost}
                            onPositiveComment={onPositiveComment}
                            onNegativeComment={onNegativeComment}
                        />
                    }
                />
                <Route
                    path="/form/:id?"
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