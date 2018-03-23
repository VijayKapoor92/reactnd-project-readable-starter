import React from 'react';
import { withStyles } from 'material-ui/styles';
import styles from '../../styles';


const MainContainer = ({classes, children}) => (
    <div className={classes.container}>
        { children }
    </div>
);

export default withStyles(styles)(MainContainer);