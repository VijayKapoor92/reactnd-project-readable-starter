import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, List, ListItem, ListItemText, ListItemIcon } from 'material-ui';
import CheckedIcon from 'react-icons/lib/md/radio-button-checked';
import UnCheckedIcon from 'react-icons/lib/md/radio-button-unchecked';

const MenuSort = ({open, options, sortBy, onClose, onSortBy}) => (
    <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={onClose}>
        <DialogTitle id="simple-dialog-title">Sort By</DialogTitle>
        <div>
            <List>
                {options.map( ({value, text}) =>
                    <ListItem key={value} button onClick={() => onSortBy(value)}>
                        <ListItemIcon>
                            {
                                sortBy === value ?
                                    <CheckedIcon /> :
                                    <UnCheckedIcon />
                            }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )}
            </List>
        </div>
    </Dialog>
);

MenuSort.propTypes = {
    open: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired,
    sortBy: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSortBy: PropTypes.func.isRequired
};

MenuSort.defaultProps = {
    open: false,
    options: [],
    sortBy: "-votescore",
    onClose: f=>f,
    onSortBy: f=>f
};

export default MenuSort;