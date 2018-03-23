import blue from "material-ui/colors/blue";
import deepPurple from "material-ui/colors/deepPurple";
import { createMuiTheme } from "material-ui/styles/index";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: deepPurple,
    },
    status: {
        deepPurple,
        danger: 'orange',
    }
});

export default theme;