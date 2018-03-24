import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Paper, Badge } from  'material-ui';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import ThumbDownIcon from "react-icons/lib/md/thumb-down";
import ThumbUpIcon from "react-icons/lib/md/thumb-up";
import EditIcon from 'react-icons/lib/md/create';
import HeartIcon from 'react-icons/lib/md/favorite';
import CommentIcon from 'react-icons/lib/md/comment';
import DeleteIcon from 'react-icons/lib/md/delete';
import Bar from '../Bar';
import MainContainer from '../MainContainer';
import Post from '../Post';
import Comments from "../Comments";

const Detalhes = props => {
    const {history, classes, post = {}, comments = [], onOpenForm, onPositivePost, onNegativePost, onPositiveComment, onNegativeComment, onDeleteComment, onDeletePost} = props;
    const { id, author, body, timestamp, title, voteScore=0} = post;
    return (
        <Fragment>
            <Bar>
                <Toolbar>
                    <IconButton
                        onClick={()=>history.go(-1)}
                        color="inherit"
                        aria-label="Menu"
                        className={classes.menuButton}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.flex} />
                    <IconButton onClick={onOpenForm} color="inherit">
                        <CommentIcon />
                    </IconButton>
                    <IconButton component={Link} to={`/form/${id}`} color="inherit">
                        <EditIcon/>
                    </IconButton>
                    <IconButton color="inherit">
                        <DeleteIcon onClick={()=>onDeletePost(post)} />
                    </IconButton>
                    <IconButton onClick={()=>onNegativePost(post)} color="inherit">
                        <ThumbDownIcon/>
                    </IconButton>
                    <IconButton onClick={()=>onPositivePost(post)} color="inherit">
                        <ThumbUpIcon/>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={voteScore} color="secondary">
                            <HeartIcon/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </Bar>
            <MainContainer>
                <div className={classes.main}>
                    <Post
                        author={author}
                        title={title}
                        timestamp={timestamp}
                        body={body}
                    />
                    {comments.length > 0 && (
                        <Paper className={classes.root} elevation={0}>
                            <Comments
                                comments={comments}
                                onOpenForm={onOpenForm}
                                onPositiveComment={onPositiveComment}
                                onNegativeComment={onNegativeComment}
                                onDeleteComment={onDeleteComment}
                            />
                        </Paper>
                    )}
                </div>
            </MainContainer>
        </Fragment>
    );
};

export default Detalhes;