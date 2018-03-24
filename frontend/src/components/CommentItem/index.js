import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/index';
import { Avatar, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Badge } from 'material-ui';
import dateformat from 'dateformat';
import Person from 'react-icons/lib/md/person';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import HeartIcon from 'react-icons/lib/md/favorite';
import DeleteIcon from 'react-icons/lib/md/delete';
import EditIcon from 'react-icons/lib/md/create';
import styles from '../../styles';

const CommentItem = ({comment, classes, onOpenForm, onPositiveComment, onNegativeComment, onDeleteComment}) => {
    const { id, author, body, timestamp, voteScore } = comment;
    return (
        <React.Fragment>
            <ListItem button>
                <Avatar className={classes.avatar}>
                    <Person />
                </Avatar>
                <ListItemText
                    primary={body}
                    secondary={`${author} - ${dateformat(new Date(timestamp),'yyyy-dd-mm HH:MM')}`}
                />
                <ListItemSecondaryAction>
                    <IconButton>
                        <Badge badgeContent={voteScore} color="secondary">
                            <HeartIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton onClick={()=>onNegativeComment({id})}>
                        <ThumbDownIcon />
                    </IconButton>
                    <IconButton onClick={()=>onPositiveComment({id})}>
                        <ThumbUpIcon />
                    </IconButton>
                    <IconButton onClick={()=>onOpenForm(comment)}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={()=>onDeleteComment({id})}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </React.Fragment>
    );
};

CommentItem.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired
    }).isRequired,
    classes: PropTypes.object.isRequired,
    onOpenForm: PropTypes.func.isRequired,
    onPositiveComment: PropTypes.func.isRequired,
    onNegativeComment: PropTypes.func.isRequired,
    onDeleteComment: PropTypes.func.isRequired
};

CommentItem.defaultProps = {
    comment: {},
    classes: {},
    onOpenForm: f=>f,
    onPositiveComment: f=>f,
    onNegativeComment: f=>f,
    onDeleteComment: f=>f
};

export default withStyles(styles)(CommentItem);