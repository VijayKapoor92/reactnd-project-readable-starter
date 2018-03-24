import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/index';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'material-ui';
import styles from '../../styles';

const CommentForm = ({ classes, open, comment={}, onClose, onSubmit }) => {
    const { id=null, author="", body = "" } = comment;
    let _comment, _author;
    const submit = e => {
        onSubmit({author: _author.value, body: _comment.value, id});
        onClose();
        _author.value = "";
        _comment.value = "";
    };
    return (
        <Dialog
            open={open}
            onClose={onClose}
            arial-labelledby="form-dialog-title"
        >
            <DialogTitle>Comment</DialogTitle>
            <DialogContent className={classes.commentForm}>
                <TextField
                    autoFocus
                    inputProps={{defaultValue:body}}
                    inputRef={input => _comment = input}
                    margin="dense"
                    label="Tell us your comment:"
                    fullWidth
                />
                <TextField
                    inputProps={{defaultValue: author}}
                    inputRef={input => _author = input}
                    margin="dense"
                    label="Tell us your name:"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={submit}
                    color="primary"
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

CommentForm.propTypes = {
    open: PropTypes.bool.isRequired,
    comment: PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        body: PropTypes.string
    }),
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

CommentForm.defaultProps = {
    open: false,
    comment: {},
    classes: {},
    onClose: f=>f,
    onSubmit: f=>f
};

export default withStyles(styles)(CommentForm);