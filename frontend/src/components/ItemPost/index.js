import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles/index';
import { Divider, Avatar, IconButton, ListItem, ListItemText, ListItemSecondaryAction, Badge } from 'material-ui';
import dateformat from 'dateformat';
import Person from 'react-icons/lib/md/person';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import HeartIcon from 'react-icons/lib/md/favorite'
import CommentIcon from 'react-icons/lib/md/comment';

const ItemPost = ({classes, id, author, title, date, voteScore, commentCount, onPositivePost, onNegativePost}) => (
    <React.Fragment>
        <ListItem button component={ Link } to={`/post/${id}`}>
            <Avatar className={classes.avatar}>
                <Person />
            </Avatar>
            <ListItemText
                primary={title}
                secondary={`${author} - ${dateformat(new Date(date),'yyyy-dd-mm HH:MM')}`}
            />
            <ListItemSecondaryAction>
                <IconButton>
                    <Badge badgeContent={commentCount} color="primary">
                        <CommentIcon/>
                    </Badge>
                </IconButton>
                <IconButton>
                    <Badge badgeContent={voteScore} color="secondary">
                        <HeartIcon/>
                    </Badge>
                </IconButton>
                <IconButton onClick={()=>onNegativePost({id})}>
                    <ThumbDownIcon />
                </IconButton>
                <IconButton onClick={()=>onPositivePost({id})}>
                    <ThumbUpIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <Divider />
    </React.Fragment>
);

ItemPost.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    onPositivePost: PropTypes.func.isRequired,
    onNegativePost: PropTypes.func.isRequired
};

ItemPost.defaultProps = {
    classes: {},
    id: "",
    author: "",
    title: "",
    date: 0,
    voteScore: 0,
    commentCount: 0,
    onPositivePost: f=>f,
    onNegativePost: f=>f
};

export default withStyles()(ItemPost);