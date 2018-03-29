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
import EditIcon from 'react-icons/lib/md/edit';
import DeleteIcon from 'react-icons/lib/md/delete';
// import {category} from "../../reducers";

const ItemPost = ({classes, id, category, author, title, date, voteScore, commentCount, onPositivePost, onNegativePost, onDeletePost, post}) => (
    <React.Fragment>
        <ListItem button component={ Link } to={`/${category.path}/${id}`}>
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
                <IconButton component={Link} to={`/form/${id}`}>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon onClick={()=>onDeletePost(post)} />
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
    onNegativePost: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
};

ItemPost.defaultProps = {
    classes: {},
    post:{},
    id: "",
    author: "",
    title: "",
    date: 0,
    voteScore: 0,
    commentCount: 0,
    category: {},
    onPositivePost: f=>f,
    onNegativePost: f=>f,
    onDeletePost: f=>f
};

export default withStyles()(ItemPost);