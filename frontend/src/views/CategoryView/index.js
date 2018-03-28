import React, { Component, Fragment } from 'react';

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort';

import Posts from "../../components/Posts";
import BarContainer from "../../components/Bar";
import MainContainer from '../../components/MainContainer';
import Fab from '../../components/Fab';

import {withStyles} from "material-ui/styles/index";
import styles from '../../styles';

class CategoryView extends Component{

    renderToolbar(title){
        const { classes, onOpenDrawer, onOpenSortMenu } = this.props;
        return (
            <Fragment>
                <BarContainer>
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
                            {title}
                        </Typography>
                        <IconButton
                            color="inherit"
                            onClick={onOpenSortMenu}
                        >
                            <SortIcon />
                        </IconButton>
                    </Toolbar>
                </BarContainer>
            </Fragment>
        );
    }

    render(){
        const { category={}, posts=[], onPositivePost, onNegativePost } = this.props;
        console.log(category);
        return (
            <Fragment>
                {this.renderToolbar(category.name)}
                <MainContainer>
                    <Posts
                        posts={posts}
                        onPositivePost={onPositivePost}
                        onNegativePost={onNegativePost}
                    />
                </MainContainer>
                <Fab href="/form" />
            </Fragment>
        );
    }
}

export default withStyles(styles)(CategoryView);