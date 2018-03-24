import React from 'react';
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import {Typography, Grid, Divider} from 'material-ui';

const Post = ({ title, author, body, timestamp=0 }) => (
    <Grid container spacing={Number(40)}>
        <Grid item xs={12} xl={12} style={{marginRight:20}}>
            <Typography variant="title" gutterBottom>{title}</Typography>
            <Typography type="subheading" gutterBottom >{`${author} - ${dateformat(new Date(timestamp),'yyyy-dd-mm HH:MM')} `}</Typography>
            <Divider light />
            <Typography type="body1" style={{marginTop:16}} gutterBottom>{body}</Typography>
        </Grid>
    </Grid>
);

Post.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    timestamp: PropTypes.number
};

Post.defaultProps = {
    title:undefined,
    author:undefined,
    body:undefined,
    timestamp: 0
};

export default Post;