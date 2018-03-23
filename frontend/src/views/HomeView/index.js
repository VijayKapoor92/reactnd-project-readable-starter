import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import { Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';

import Bar from "../../components/Bar";
import MainContainer from "../../components/MainContainer";
import Posts from "../../components/Posts";

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
        const { posts, onPositivePost, onNegativePost } = this.props;
        return (
            <Fragment>
                {this.renderToolbar()}
                <MainContainer>
                    <Posts
                        posts={posts}
                        onPositivePost={onPositivePost}
                        onNegativePost={onNegativePost}
                    />
                </MainContainer>
            </Fragment>
        );
    }
}

export default withStyles(styles)(HomeView);