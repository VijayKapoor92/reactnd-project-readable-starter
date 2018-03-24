import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import { Button } from 'material-ui';
import styles from '../../styles';
import AddIcon from 'react-icons/lib/md/add';

const Fab = ({href, classes}) => (
    <Button
        component={Link}
        to={href}
        variant="fab"
        className={classes.fab}
        color="secondary"
        arial-label="add"
    >
        <AddIcon size={24}/>
    </Button>
);

Fab.propTypes = {
    href: PropTypes.string.isRequired
};

export default withStyles(styles)(Fab);