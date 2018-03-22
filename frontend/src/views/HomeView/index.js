import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import { Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu';
import SortIcon from 'react-icons/lib/md/sort-by-alpha';
import Bar from "../../components/Bar";

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
            </Fragment>
        );
    }
}

export default withStyles()(HomeView);