import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import { Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort';

import Bar from "../../components/Bar";
import MainContainer from "../../components/MainContainer";
import Posts from "../../components/Posts";
import Fab from '../../components/Fab';

import styles from '../../styles';

class HomeView extends Component {

    renderToolbar(){
        const { classes, onOpenDrawer, onOpenSortMenu } = this.props;
        return (
            <Bar>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={onOpenDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex}
                    >
                        Readable
                    </Typography>
                    <IconButton
                        color="inherit"
                        onClick={onOpenSortMenu}
                    >
                        <SortIcon />
                    </IconButton>
                </Toolbar>
            </Bar>
        );
    }

    render(){
        const { posts, categories, onPositivePost, onNegativePost, onDeletePost } = this.props;

        return (
            <Fragment>
                {this.renderToolbar()}
                <MainContainer>
                    <Posts
                        categories={categories}
                        posts={posts}
                        onPositivePost={onPositivePost}
                        onNegativePost={onNegativePost}
                        onDeletePost={onDeletePost}
                    />
                </MainContainer>
                <Fab href="/form" />
            </Fragment>
        );
    }
}

export default withStyles(styles)(HomeView);