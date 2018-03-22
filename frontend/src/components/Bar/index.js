import React from 'react';
import AppBar from 'material-ui/AppBar';

const Bar = ({children}) => (
    <AppBar position="fixed">
        {children}
    </AppBar>
);

export default Bar;