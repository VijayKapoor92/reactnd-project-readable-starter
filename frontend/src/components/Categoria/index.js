import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from 'material-ui';
import CategoryIcon from 'react-icons/lib/md/local-offer';

const Categoria = ({name, path}) => (
    <ListItem button component={Link} to={`/category/${path}`}>
        <ListItemIcon>
            <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
    </ListItem>
);

Categoria.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default Categor;