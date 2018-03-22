import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostIcon from 'react-icons/lib/md/local-post-office';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from 'material-ui';
import Categoria from "../Categoria";

const Menu = ({open, categories, onClose}) => (
    <Drawer open={open} onClose={onClose}>
        <div
            tabIndex={0}
            role="button"
            onClick={onClose}
            onKeyDown={onClose}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <PostIcon />
                    </ListItemIcon>
                    <ListItemText primary="All" />
                </ListItem>
                {categories.map( (category, index) =>
                    <Categoria
                        key={index}
                        path={category[0]}
                        name={category[1]}
                    />
                )}
            </List>
        </div>
    </Drawer>
);

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    categories: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
};

Menu.defaultProps = {
    open: false,
    categories:[],
    onClose: f=>f
};

export default Menu;